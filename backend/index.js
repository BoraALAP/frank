const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");

const { NextApp } = require('@keystonejs/app-next');
const { Text, Password} = require("@keystonejs/fields");

const { atTracking, createdAtField, updatedAtField } = require('@keystonejs/list-plugins');

const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GoogleAuthStrategy } = require('@keystonejs/auth-passport');


require("dotenv").config();

const OperationSchema = require("./lists/Operation.ts");
const UserSchema = require("./lists/User.ts");
const DealerSchema = require("./lists/Dealer.ts");
const ImagineSchema = require("./lists/Imagine.ts");


const cookieSecret = process.env.COOKIESECRET;

const PROJECT_NAME = "frank";
const adapterConfig = {
  mongoUri: process.env.DATABASE,
};

/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret,
});

keystone.createList('BackEndUser', {
  fields: {
    name: { type: Text },
    email: { type: Text },
    password: { type: Password },

    // This field name must match the `idField` setting passed to the auth
    // strategy constructor below
    googleId: { type: Text },
  },
});

keystone.createList("Operation", OperationSchema);
keystone.createList("User", UserSchema);
keystone.createList("Dealer", DealerSchema);
keystone.createList("Imagine", ImagineSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'BackEndUser',
  config: {
    identityField: 'email',
    secretField: 'password',
  },
});
// const googleStrategy = keystone.createAuthStrategy({
//   type: GoogleAuthStrategy,
//   list: 'BackEndUser',
//   config: {
//     idField: 'googleId',
//     appId: process.env.GOOGLE_CLIENT_ID,
//     appSecret: process.env.GOOGLE_CLIENT_SECRET,
//     loginPath: '/auth/google',
//     callbackPath: '/auth/google/callback',
//     callbackHost: process.env.BACKEND_URL,

//     // Once a user is found/created and successfully matched to the
//     // googleId, they are authenticated, and the token is returned here.
//     // NOTE: By default Keystone sets a `keystone.sid` which authenticates the
//     // user for the API domain. If you want to authenticate via another domain,
//     // you must pass the `token` as a Bearer Token to GraphQL requests.
//     onAuthenticated: ({ token, item, isNewItem }, req, res) => {
//       console.log(token);
//       res.redirect('/');
//     },

//     // If there was an error during any of the authentication flow, this
//     // callback is executed
//     onError: (error, req, res) => {
//       console.error(error);
//       res.redirect('/?error=Uh-oh');
//     },
//   },
// });

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: false, 
      // authStrategy: authStrategy, 
    }),
    new NextApp({ dir: '../frontend/' }),
  ],
};
