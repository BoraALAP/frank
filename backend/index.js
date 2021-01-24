const { gql } =require( 'apollo-server-express')

const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");

const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");

const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

require("dotenv").config();

const BackendUserSchema = require("./lists/BackendUser.js");
const OperationSchema = require("./lists/Operation.js");
const UserSchema = require("./lists/User.js");
const DealerSchema = require("./lists/Dealer.js");
const ImagineSchema = require("./lists/Imagine.js");
const ForgottenPasswordTokenSchema = require("./lists/ForgottenPasswordToken.js");
const {CustomSchema} = require("./lists/Custom.js");
const UserMutationSchema = require("./mutations/User.js")

const cookieSecret = process.env.COOKIESECRET;

const PROJECT_NAME = "frank";
const adapterConfig = {
  mongoUri: process.env.DATABASE,
};

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30,
    sameSite: false,
  },
  cookieSecret: cookieSecret,
});

keystone.createList('BackEndUser', BackendUserSchema);
keystone.createList("Operation", OperationSchema);
keystone.createList("User", UserSchema);
keystone.createList("Dealer", DealerSchema);
keystone.createList("Imagine", ImagineSchema);
keystone.createList("ForgottenPasswordToken", ForgottenPasswordTokenSchema);

keystone.extendGraphQLSchema(CustomSchema);
keystone.extendGraphQLSchema(UserMutationSchema);



// const authStrategy = keystone.createAuthStrategy({
//   type: PasswordAuthStrategy,
//   list: 'BackEndUser',
//   config: {
//     identityField: 'email',
//     secretField: 'password',
//   },
// });


const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  hooks: {
    afterAuth: async ({context, token, item}) => {      
      await context.executeGraphQL({
        query: gql` 
          mutation($id: String!, $lastLogin:String){
            updateUser(id: $id , data:{ lastLogin: $lastLogin }){
             lastLogin
            }
          }
        `,
        variables:{id: item.id, lastLogin: Date.now().toString()}
      })
    },
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: false, 
    }),
  ],
};


