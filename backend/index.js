const { gql } =require( 'apollo-server-express')

const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
// const { StaticApp } = require('@keystonejs/app-static');
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");

// const { NextApp } = require('@keystonejs/app-next');
const { DateTimeUtc} = require("@keystonejs/fields");


const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GoogleAuthStrategy } = require('@keystonejs/auth-passport');


require("dotenv").config();

const BackendUserSchema = require("./lists/BackendUser.ts");
const OperationSchema = require("./lists/Operation.ts");
const UserSchema = require("./lists/User.ts");
const DealerSchema = require("./lists/Dealer.ts");
const ImagineSchema = require("./lists/Imagine.ts");
const {CustomSchema, ForgottenPasswordToken} = require("./lists/Custom.js");
const UserMutationSchema = require("./mutations/User.js")
const UserQuerySchema = require("./queries/User.js")

const cookieSecret = process.env.COOKIESECRET;

const PROJECT_NAME = "frank";
const adapterConfig = {
  mongoUri: process.env.DATABASE,
};

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30, // 30 days
  secret: process.env.COOKIE_SECRET || '',
};

/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookie: {
    secure: true,
    maxAge: 60 * 60 * 24 * 30,
  },
  cookieSecret,

});

keystone.createList('BackEndUser', BackendUserSchema);
keystone.createList("Operation", OperationSchema);
keystone.createList("User", UserSchema);
keystone.createList("Dealer", DealerSchema);
keystone.createList("Imagine", ImagineSchema);
keystone.createList("ForgottenPasswordToken", ForgottenPasswordToken);

keystone.extendGraphQLSchema(CustomSchema);
keystone.extendGraphQLSchema(UserMutationSchema);
keystone.extendGraphQLSchema(UserQuerySchema);



// const authStrategy = keystone.createAuthStrategy({
//   type: PasswordAuthStrategy,
//   list: 'BackEndUser',
//   config: {
//     identityField: 'email',
//     secretField: 'password',
//   },
// });
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

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'email',
    secretField: 'password',
  },
  hooks: {
    afterAuth: async ({context, token, item}) => {
      console.log(item);
      
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
      // authStrategy: authStrategy, 
    }),
    // new NextApp({ dir: '../frontend/' }),
  ],
};


// keystone
//   .prepare({
//     apps: [new GraphQLApp(),new AdminUIApp(), ],
//     dev: process.env.NODE_ENV !== 'production',
//   })
//   .then(async ({ middlewares }) => {
//     await keystone.connect();
//     const app = express();

//     app.use(cors())
//   app.use(cookieParser(process.env.COOKIESECRET));
//   app.use(bodyParser.json()); 

//   app.get('/', function (req, res) {
//     res.send('Hello World!')
//   })

//   app.use('/api/mail', mailer)

//   app.use(middlewares).listen(process.env.PORT, () => {
//     console.log(`Example app listening at http://localhost:${process.env.PORT}`)
//   })
//   });



// const dev = process.env.NODE_ENV !== 'production';
// const apps = [
//   new GraphQLApp(), 
//   new AdminUIApp(), 
//   // new StaticApp({ path: '/', src: 'public' })
//   ];



// const preparations = apps.map(app =>
//   app.prepareMiddleware({ keystone, dev })
// );

// Promise.all(preparations).then(async middlewares => {
//   await keystone.connect();
//   const app = express();
//   app.use(cors())
//   app.use(cookieParser(process.env.COOKIESECRET));
//   app.use(bodyParser.json()); 

//   app.get('/', function (req, res) {
//     res.send('Hello World!')
//   })

//   app.use('/api/mail', mailer)

//   app.use(middlewares).listen(process.env.PORT, () => {
//     console.log(`Example app listening at http://localhost:${process.env.PORT}`)
//   })
// })
// module.exports.keystone = keystone;
// module.exports.authStrategy = authStrategy;