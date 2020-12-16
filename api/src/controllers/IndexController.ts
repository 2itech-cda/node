import { Request, Response } from 'express';

export class IndexController {

    async index(req: Request, res: Response): Promise<any> {
        throw new Error404();
        
        throw new Error('Too Bad !!!!!!!!!');

        //return { message: 'hello, World' };
    }

}