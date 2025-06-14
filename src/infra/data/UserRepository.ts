import { User } from "../../core/domain/entity/User";

export interface UserRepository {
    save(entity: User): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    update(entity: User): Promise<void>;
    delete(id: string): Promise<void>;
}