import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { permissionsList } from './schemas/fields';

//Options
        import {Screen} from "./lists/Options/Screen"
        import {Interior} from "./lists/Options/Interior"
        import {HardwareKit} from "./lists/Options/HardwareKit"
        import {GlassColor} from "./lists/Options/GlassColor"
        import {Glass} from "./lists/Options/Glass"
        import {Exterior} from "./lists/Options/Exterior"
        import {DividedLite} from "./lists/Options/DividedLite"
        import {BrickmoldAndTrim} from "./lists/Options/BrickmoldAndTrim"

        //Main
        import {User} from "./lists/User"
        import {ProductCategory} from "./lists/ProductCategory"
        import {Product} from "./lists/Product"
        import {Operation} from "./lists/Operation"
        import {Imagine} from "./lists/Imagine"
        import {ForgottenPasswordToken} from "./lists/ForgottenPasswordToken"
        import {Dealer} from "./lists/Dealer"
        // import {Custom} from "./lists/Custom"
        import {ContactUsForm} from "./lists/ContactUsForm"
        import {BackEndUser} from "./lists/BackendUser"

import 'dotenv/config';

import { sendEmail } from "./mail";
import { extendGraphqlSchema } from './mutations';

function check(name: string) {}


  const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
    secret: process.env.COOKIE_SECRET,
  };


  const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
      fields: ['name', 'email', 'password'],
      // TODO: Add in inital roles here
    },
    passwordResetLink: {
      async sendToken(args) {
        // send the email
        await sendEmail(args.token, args.identity);
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
        url: process.env.DATABASE,
        // async onConnect(keystone) {
        //   console.log('Connected to the database!');
        // },
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
        // Custom,
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
        BrickmoldAndTrim
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