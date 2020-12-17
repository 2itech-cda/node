import { IndexController } from './controllers/IndexController';
import { UserController } from './controllers/UserController';

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
    {
        method: 'get',
        path: '/users',
        controller: UserController,
        action: 'getUsers'
    },
    {
        method: 'get',
        path: '/users/email/:email',
        controller: UserController,
        action: 'getByEmail'
    },
    {
        method: 'post',
        path: '/register',
        controller: UserController,
        action: 'register'
    }
];
