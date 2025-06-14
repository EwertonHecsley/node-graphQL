import { randomUUID } from "crypto";
import { User } from "../../core/domain/entity/User";
import { UserRepository } from "../../infra/data/UserRepository";

type RequestUser = {
    name: string;
    email: string;
    city: string;
}

type ResponseUser = {
    id: string;
    name: string;
    email: string;
    city: string;
}

export class CreateUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    async execute(data: RequestUser): Promise<ResponseUser> {
        const user = User.create(
            {
                id: randomUUID(),
                ...data
            }
        )

        await this.userRepository.save(user);

        return user
    }
}