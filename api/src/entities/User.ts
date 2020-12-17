import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    firstName: string = '';

    @Column()
    lastName: string = '';

    @Column()    
    password: string;

    setPassword(password: string): void {
        this.password = bcrypt.hashSync(password);
    }
}
