import { Request, Response } from 'express';
import { Db } from 'typeorm';
import { InternalServerError } from '../errors';

export class IndexController {

    async index(req: Request, res: Response): Promise<any> {
        return { message: 'Hello, World' };
    }

}