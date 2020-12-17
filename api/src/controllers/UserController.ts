import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import { Request, response, Response } from 'express';
import { User } from "../entities/User";
import { BadRequestError, ConflictError, NotFoundError, UnprocessableEntityError } from "../errors";

export class UserController {

    private userRepo: UserRepository = getCustomRepository(UserRepository);

    async getUsers(req: Request, res: Response) {
        return await this.userRepo.find();
    }

    /**
     * http://localhost:3000/users/jane.doe@gmail.com
     */
    async getByEmail(req: Request, res: Response) {
        const email = req.params.email;
        if (!email) {
            throw new BadRequestError();
        }

        const user: User | undefined = await this.userRepo.findByEmail(email);

        if (!user) {
            throw new NotFoundError(req.url);
        }

        return user;
    }

    async register(req: Request, res: Response) {
        const body = req.body;
        const user = new User();

        user.email = body.email;
        user.setPassword(body.password);

        try {
            res.status(201);
            await this.userRepo.save(user);
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                throw new ConflictError();
            }
            throw new UnprocessableEntityError();
        }
        return user;
    }

}