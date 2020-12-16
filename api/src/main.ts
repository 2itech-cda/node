// Les modules
import * as express from 'express';
import { createConnection } from 'typeorm';
import * as bodyParser from 'body-parser';
import { Request, Response, Application } from 'express';
import { Route, routes } from './routes';
import { IndexController } from './controllers/IndexController';

// Variables d'environnements.
const HOST = process.env.HOST || 'localhost';
const PORT = Number(process.env.PORT) || 3000;

// Création de l'instance d'application express.
const app: Application = express();

// Ajout des middlewares
app.use(express.static('static'));
app.use(bodyParser.json());

// app.get('/chemin', (req, res) => {});

// Gestion des routes.
routes.forEach((route: Route): void => {

    app[route.method](route.path, (req: Request, res: Response) => {
        const controller = new (route.controller);
        const result = controller[route.action](req, res);

        if (result instanceof Promise) {
            result.then(
                data => data !== null && data !== undefined ? res.send(data) : undefined,
                err => console.log(err)
            );
        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });

    // app['get']('/', (req: Request, res: Response) => {
    //     const controller = new IndexController;
    //     const result = controller.index(req, res);
    // });
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
