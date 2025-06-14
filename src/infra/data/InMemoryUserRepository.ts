import { User } from "../../core/domain/entity/User";
import { UserRepository } from "./UserRepository";

export class InMemoryUserRepository implements UserRepository {
    private users: User[] = [];

    async save(entity: User): Promise<User> {
        this.users.push(entity);
        return entity;
    }

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async findById(id: string): Promise<User | null> {
        const user = this.users.find(user => user.id === id);
        return user || null;
    }

    async update(entity: User): Promise<void> {
        const index = this.users.findIndex(user => user.id === entity.id);
        this.users[index] = entity;
    }

    async delete(id: string): Promise<void> {
        this.users = this.users.filter(user => user.id !== id);
    }
}