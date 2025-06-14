import { CreateUserUseCase } from "../../application/useCase/Create";
import { InMemoryUserRepository } from "../../infra/data/InMemoryUserRepository"


type ArgsType = {
    name: string;
    email: string;
    city: string;
}


const userRepository = new InMemoryUserRepository();
const createUser = new CreateUserUseCase(userRepository);

export const resolvers = {
    Query: {
        users: () => userRepository.findAll(),
        user: (_: any, args: { id: string }) => userRepository.findById(args.id)
    },
    Mutation: {
        createUser: (_: any, args: ArgsType) => {
            return createUser.execute(args);
        }
    }
}