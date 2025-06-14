import { CreateUserUseCase } from "../../application/useCase/Create";
import { InMemoryUserRepository } from "../../infra/data/InMemoryUserRepository"


type ArgsType = {
    name: string;
    email: string;
    city: string;
}


const userRepository = new InMemoryUserRepository();
const createUser = new CreateUserUseCase(userRepository);

export const resolver = {
    Query: {
        users: () => userRepository.findAll()
    },
    Mutation: {
        createUser: (_: any, args: ArgsType) => {
            return createUser.execute(args);
        }
    }
}