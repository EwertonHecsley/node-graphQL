import { ApolloServer } from 'apollo-server';
import { typeDefs } from './interfaces/graphql/schema';
import { resolvers } from './interfaces/graphql/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});