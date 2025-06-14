import { User } from "../../core/domain/entity/User";
import { UserRepository } from "./UserRepository";

export class InMemoryUserRepository implements UserRepository {
    private users: User[] = [];

    async save(entity: User): Promise<User> {
        const user = User.create(entity);
        this.users.push(user);
        return user;
    }

    async findAll(): Promise<User[]> {
        return this.users;
    }
}