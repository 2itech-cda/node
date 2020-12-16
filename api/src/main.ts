import * as express from 'express';
import { createConnection } from 'typeorm';
import * as bodyParser from 'body-parser'; 
import { Request, Response, Application } from 'express';

const app: Application = express();

app.use(express.static('static'));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response): void => {
    res.json({message: 'hello'});
});

app.listen(3000, () => {
    console.log(`[express] server has started on localhost:3000`);

    try {
        createConnection();
    } catch (error) {
        console.log('[typeorm] connection error:', error);
    }
});
