import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { permissionsList } from './schemas/fields';
import { Role } from './schemas/Role';
import {Screen} from "./schemas/Options/Screen"
import {Interior} from "./schemas/Options/Interior"
import {HardwareKit} from "./schemas/Options/HardwareKit"
import {GlassColor} from "./schemas/Options/GlassColor"
import {Glass} from "./schemas/Options/Glass"
import {Exterior} from "./schemas/Options/Exterior"
import {DividedLite} from "./schemas/Options/DividedLite"
import {BrickmoldAndTrim} from "./schemas/Options/BrickmoldAndTrim"

//Main
import {User} from "./schemas/User"
import {ProductCategory} from "./schemas/ProductCategory"
import {Product} from "./schemas/Product"
import {Operation} from "./schemas/Operation"
import {Imagine} from "./schemas/Imagine"
import {ForgottenPasswordToken} from "./schemas/ForgottenPasswordToken"
import {Dealer} from "./schemas/Dealer"
import {ContactUsForm} from "./schemas/ContactUsForm"
import {BackEndUser} from "./schemas/BackendUser"

import 'dotenv/config';

import { sendPasswordResetEmail } from './lib/mail';
import { extendGraphqlSchema } from './mutations';

function check(name: string) {}

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password', 'companyName'],
    // TODO: Add in inital roles here
  },
  passwordResetLink: {
    async sendToken(args) {
      // send the email
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      async onConnect(keystone) {
        console.log('Connected to the database!');
        
      },
    },
    lists: createSchema({
      // Schema items go in here
      User,
 
   ProductCategory,
        Product,
        Operation,
        Imagine,
        ForgottenPasswordToken,
        Dealer,
        
        ContactUsForm,
        BackEndUser,
        // Options
        Screen,
        Interior,
        HardwareKit,
        GlassColor,
        Glass,
        Exterior,
        DividedLite,
        BrickmoldAndTrim,
      Role,
    }),
    extendGraphqlSchema,
    ui: {
      // Show the UI only for poeple who pass this test
      isAccessAllowed: ({ session }) =>
        // console.log(session);
        !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // GraphQL Query
      User: `id name email role { ${permissionsList.join(' ')} }`,
    }),
  })
);
