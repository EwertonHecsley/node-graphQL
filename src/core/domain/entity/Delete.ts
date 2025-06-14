import { error } from "console";
import { UserRepository } from "../../../infra/data/UserRepository";

type RequestUser = {
    id: string;
}



export class DeleteUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    async execute({ id }: RequestUser): Promise<void> {
        try {
            const user = await this.userRepository.findById(id);
            if (!user) {
                throw new Error(`User with id ${id} not found`);
            }
            await this.userRepository.delete(id);
        }
        catch (error) {

            throw new Error(`Error deleting user with id ${id}: ${error}`);
        }
    }
}