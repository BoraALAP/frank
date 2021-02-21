import { graphQLSchemaExtension } from '@keystone-next/keystone/schema';
import addToCart from './addToCart';
import checkout from './checkout';
import userCreate from './userCreate';

// make a fake graphql tagged template literal
const graphql = String.raw;
export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      userCreate(userID: ID): User
    }
  `,
  resolvers: {
    Mutation: {
      userCreate
    },
  },
});
