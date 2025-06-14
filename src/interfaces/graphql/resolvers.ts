import { CreateUserUseCase } from "../../application/useCase/Create";
import { DeleteUserUseCase } from "../../core/domain/entity/Delete";
import { UpdateUserUseCase } from "../../core/domain/entity/Update";
import { InMemoryUserRepository } from "../../infra/data/InMemoryUserRepository"


type ArgsType = {
    name: string;
    email: string;
    city: string;
}

type ArgsTypeUpdate = {
    id: string;
    name?: string;
    email?: string;
    city?: string;
}


const userRepository = new InMemoryUserRepository();
const createUser = new CreateUserUseCase(userRepository);
const deleteUser = new DeleteUserUseCase(userRepository);
const update = new UpdateUserUseCase(userRepository);

export const resolvers = {
    Query: {
        users: async () => {
            const users = await userRepository.findAll();
            return users.map(user => user.toPlain());
        },
        user: async (_: any, args: { id: string }) => {
            const user = await userRepository.findById(args.id);
            return user ? user.toPlain() : null;
        }
    },
    Mutation: {
        createUser: (_: any, args: ArgsType) => {
            return createUser.execute(args);
        },
        deleteUser: (_: any, args: { id: string }) => {
            const { id } = args;
            return deleteUser.execute({ id });
        },
        updateUser: (_: any, args: ArgsTypeUpdate) => {
            const { id, name, email, city } = args;
            return update.execute({ id, name, email, city });
        }
    }
}