import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async findByEmail(value: string): Promise<User | undefined> {
        return await this.findOne({ where: { email: value } });
    }

}