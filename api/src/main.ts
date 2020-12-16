import * as express from 'express';
import { Request, Response, Application } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response): void => {
    res.json({message: 'hello'});
});

app.listen(3000, () => console.log('Server is running...'));
