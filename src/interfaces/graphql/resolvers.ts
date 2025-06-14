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
        users: () => userRepository.findAll(),
        user: (_: any, args: { id: string }) => userRepository.findById(args.id)
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