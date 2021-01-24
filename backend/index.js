const { gql } = require("apollo-server-express");
require("dotenv").config();

const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");

const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");

const { PasswordAuthStrategy } = require("@keystonejs/auth-password");

const BackEndUserSchema = require("./lists/BackEndUser.js");
const OperationSchema = require("./lists/Operation.js");
const UserSchema = require("./lists/User.js");
const DealerSchema = require("./lists/Dealer.js");
const ImagineSchema = require("./lists/Imagine.js");
const ForgottenPasswordTokenSchema = require("./lists/ForgottenPasswordToken.js");
const { CustomSchema } = require("./lists/Custom.js");
const UserMutationSchema = require("./mutations/User.js");

const PROJECT_NAME = "Frank";

// Mongo url goes in this config
const adapterConfig = {
  mongoUri: process.env.DATABASE,
};

// Keystone Configration
const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookie: {
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30,
    sameSite: false,
  },
  cookieSecret: process.env.COOKIESECRET,
});

keystone.createList("BackEndUser", BackEndUserSchema);
keystone.createList("Operation", OperationSchema);
keystone.createList("User", UserSchema);
keystone.createList("Dealer", DealerSchema);
keystone.createList("Imagine", ImagineSchema);
keystone.createList("ForgottenPasswordToken", ForgottenPasswordTokenSchema);

keystone.extendGraphQLSchema(CustomSchema);
keystone.extendGraphQLSchema(UserMutationSchema);

// HOLDING FOR PROD BACKEND AUTH on Admin
const backendAuthStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "BackEndUser",
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
  hooks: {
    afterAuth: async ({ context, item }) => {
      await context.executeGraphQL({
        query: gql`
          mutation($id: String!, $lastLogin: String) {
            updateUser(id: $id, data: { lastLogin: $lastLogin }) {
              lastLogin
            }
          }
        `,
        variables: { id: item.id, lastLogin: Date.now().toString() },
      });
    },
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp({
      authStrategy: backendAuthStrategy,
      apiPath: "/admin/api",
      graphiqlPath: "/admin/graphiql",
    }),
    new AdminUIApp({
      name: PROJECT_NAME,
      adminPath: "/admin",
      authStrategy: backendAuthStrategy,
      enableDefaultRoute: true,
      hooks: require.resolve("./admin/"),
    }),
  ],
};
