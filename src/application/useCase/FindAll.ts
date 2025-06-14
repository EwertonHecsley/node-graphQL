import { User } from "../../core/domain/entity/User";
import { UserRepository } from "../../infra/data/UserRepository";

type ResponseUser = User[];

export class FindAllUsersUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    async execute(): Promise<ResponseUser> {
        const users = await this.userRepository.findAll();
        return users;
    }
}