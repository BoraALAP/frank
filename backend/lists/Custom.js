require('dotenv').config();
const { v4: uuid } = require('uuid');


const {
  Checkbox,
  DateTime,
  Integer,
  Password, 
  Relationship,
  Select,
  Text,
} = require('@keystonejs/fields');

const access = {
  userIsAdmin: ({ authentication: { item: user } }) => Boolean(user && user.isAdmin),
  userIsCurrentAuth: ({ authentication: { item: user } }) => Boolean(user), // item will be undefined for anonymous user
};

// Read: public / Write: admin
const DEFAULT_LIST_ACCESS = {
  create: access.userIsAdmin,
  read: true,
  update: access.userIsAdmin,
  delete: access.userIsAdmin,
};


module.exports.access = access
exports.CustomSchema = {
  mutations: [
    {
      schema: 'startPasswordRecovery(email: String!): ForgottenPasswordToken',
      resolver: async (obj, { email }, context) => {

        // Step 1 Find the user via Email
        const { errors: userErrors, data: userData } = await context.executeGraphQL({
          context: context.createContext({ skipAccessControl: true }),
          query: `
            query findUserByEmail($email: String!) {
              allUsers(where: { email: $email }) {
                id
                email
              }
            }
          `,
          variables: { email: email.toLowerCase() },
        });
    
        if (userErrors || !userData.allUsers || !userData.allUsers.length) {
          console.error(
            userErrors,
            `Unable to find user when trying to create forgotten password token.`
          );
          throw new Error("There is no user with this email");
        }

        const userId = userData.allUsers[0].id;
        const token = uuid();
        const tokenExpiration =
          parseInt(process.env.RESET_PASSWORD_TOKEN_EXPIRY) || 1000 * 60 * 60 * 24;
        const now = Date.now();
        const requestedAt = new Date(now).toISOString();
        const expiresAt = new Date(now + tokenExpiration).toISOString();


        const result = {
          userId,
          token,
          requestedAt,
          expiresAt,
        };

        // Step 2 Create a Token and connect to the user
        const { data:data2, errors } = await context.executeGraphQL({
          context: context.createContext({ skipAccessControl: true }),
          query: `
            mutation createForgottenPasswordToken(
              $userId: ID!,
              $token: String,
              $requestedAt: DateTime,
              $expiresAt: DateTime,
            ) {
              createForgottenPasswordToken(data: {
                user: { connect: { id: $userId }},
                token: $token,
                requestedAt: $requestedAt,
                expiresAt: $expiresAt,
              }) {
                id
                token
                user {
                  id
                  name
                  email
                  companyName
                }
                requestedAt
                expiresAt
              }
            }
          `,
          variables: result,
        });

        console.log(
          data2
        );
        if (errors) {
          console.error(errors, `Unable to create forgotten password token.`);
          return false;
        }
          return data2.createForgottenPasswordToken;
      },
    },
    {
      schema: 'changePasswordWithToken(token: String!, password: String!): User',
      resolver: async (obj, { token, password }, context) => {
        const now = Date.now();

        const { errors, data } = await context.executeGraphQL({
          context: context.createContext({ skipAccessControl: true }),
          query: `
            query findUserFromToken($token: String!, $now: DateTime!) {
              passwordTokens: allForgottenPasswordTokens(where: { token: $token, expiresAt_gte: $now }) {
                id
                token
                user {
                  id
                }
              }
            }`,
          variables: { token, now },
        });

        if (errors || !data.passwordTokens || !data.passwordTokens.length) {
          console.error(errors, `Unable to find token`);
          throw errors.message;
        }

        const user = data.passwordTokens[0].user.id;
        const tokenId = data.passwordTokens[0].id;

        const { data: dataUserUpdate, errors: passwordError } = await context.executeGraphQL({
          context: context.createContext({ skipAccessControl: true }),
          query: `mutation UpdateUserPassword($user: ID!, $password: String!) {
            updateUser(id: $user, data: { password: $password }) {
              id
            }
          }`,
          variables: { user, password },
        });

        if (passwordError) {
          console.error(passwordError, `Unable to change password`);
          throw passwordError.message;
        }

        await context.executeGraphQL({
          context: context.createContext({ skipAccessControl: true }),
          query: `mutation DeletePasswordToken($tokenId: ID!) {
            deleteForgottenPasswordToken(id: $tokenId) {
              id
            }
          }
        `,
          variables: { tokenId },
        });

        return dataUserUpdate.id;
      },
    },
  ],
};
