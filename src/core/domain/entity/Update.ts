import { UserRepository } from "../../../infra/data/UserRepository";
import { User } from "./User";

export class UpdateUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    async execute(id: string, name?: string, email?: string, city?: string): Promise<void> {
        try {
            const user = await this.userRepository.findById(id);
            if (!user) {
                throw new Error(`User with id ${id} not found`);
            }
            const updatedUser = {
                ...user,
                name: name ?? user.name,
                email: email ?? user.email,
                city: city ?? user.city
            };

            const userUpdated = User.create(updatedUser);

            await this.userRepository.update(userUpdated);
        } catch (error) {
            throw new Error(`Error updating user with id ${id}: ${error}`);
        }
    }
}