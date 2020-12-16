// Les modules
import * as express from 'express';
import { createConnection } from 'typeorm';
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction, Application } from 'express';
import { DomainError, NotFoundError } from './errors';
import { Route, routes } from './routes';
import { IndexController } from './controllers/IndexController';

// Variables d'environnements.
const HOST = process.env.HOST || 'localhost';
const PORT = Number(process.env.PORT) || 3000;

// Création de l'instance d'application express.
const app: Application = express();

function handleError(res: Response, err: Error | DomainError) {
    if (err instanceof DomainError) {
        res.status(err.code).json(err);
        return;
    }
    res.json(err);
}

// Ajout des middlewares
app.use(express.static('static'));
app.use(bodyParser.json());

// app.get('/chemin', (req, res) => {});
app.use((req, res, next) => {
    //throw new NotFoundError('My Middleware');
    next();
});

// Gestion des routes.
routes.forEach((route: Route): void => {

    app[route.method](route.path, (req: Request, res: Response) => {
        const controller = new (route.controller);
        const result = controller[route.action](req, res);

        if (result instanceof Promise) {
            result.then(data => data !== null && data !== undefined ? res.send(data) : undefined)
                .catch(err => handleError(res, err));

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });

    // app['get']('/', (req: Request, res: Response) => {
    //     const controller = new IndexController;
    //     const result = controller.index(req, res);
    // });
});

app.use((err: Error | DomainError, req: Request, res: Response, next: NextFunction) => {
    handleError(res, err);
});

// Ecoute du serveur.
app.listen(PORT, HOST, () => {
    console.log(`[express] server has started on localhost:3000`);

    try {
        createConnection();
    } catch (error) {
        console.log('[typeorm] connection error:', error);
    }
});
