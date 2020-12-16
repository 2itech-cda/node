import { IndexController } from './controllers/IndexController';

export interface Route {
    method: string;                       // get, post, put, delete === methods HTTP
    path: string;                         // /chemin
    controller: any;                      // Objet
    action: string;                       // method
    middlewares?: Function | Function[];  // [func1, func2, func3]
}

export const routes: Route[] = [
    {
        method: 'get',
        path: '/',
        controller: IndexController,
        action: 'index'
    },
];
