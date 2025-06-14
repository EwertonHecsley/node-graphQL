import { gql } from 'apollo-server';


export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    city: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User 
  }

  type Mutation {
    createUser(name: String!, email: String!,city:String!): User!
    updateUser(id: ID!, name: String, email: String, city: String): User
    deleteUser(id: ID!): Boolean!
  }
`;