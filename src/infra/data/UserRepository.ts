import { User } from "../../core/domain/entity/User";

export interface UserRepository {
    save(entity: User): Promise<User>;
    findAll(): Promise<User[]>;
}