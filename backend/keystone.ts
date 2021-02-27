import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { permissionsList } from './schemas/fields';
import { Role } from './schemas/Role';
import { Screen } from './schemas/Options/Screen';
import { Interior } from './schemas/Options/Interior';
import { HardwareKit } from './schemas/Options/HardwareKit';
import { GlassColor } from './schemas/Options/GlassColor';
import { Glass } from './schemas/Options/Glass';
import { Exterior } from './schemas/Options/Exterior';
import { DividedLite } from './schemas/Options/DividedLite';
import { BrickmouldAndTrim } from './schemas/Options/BrickmouldAndTrim';

import { User } from './schemas/User';
import { ProductCategory } from './schemas/ProductCategory';
import { Product } from './schemas/Product';
import { Operation } from './schemas/Operation';
import { Imagine } from './schemas/Imagine';
import { Dealer } from './schemas/Dealer';
import { ContactUsForm } from './schemas/ContactUsForm';

import 'dotenv/config';

import { forgotPasswordEmail } from './lib/mail';
// import { extendGraphqlSchema } from './mutations';

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['firstName', 'lastName', 'email', 'password', 'companyName'],
    // TODO: Add in inital roles here
  },
  passwordResetLink: {
    async sendToken(args) {
      console.log(args);

      // send the email
      await forgotPasswordEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
    },

    lists: createSchema({
      // Schema items go in here
      User,
      ProductCategory,
      Product,
      Operation,
      Imagine,
      Dealer,
      ContactUsForm,
      // Options
      Screen,
      Interior,
      HardwareKit,
      GlassColor,
      Glass,
      Exterior,
      DividedLite,
      BrickmouldAndTrim,
      Role,
    }),
    // extendGraphqlSchema,
    ui: {
      // Show the UI only for poeple who pass this test
      isAccessAllowed: ({ session }) => {
        console.log(session);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return !!session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // GraphQL Query
      User: `id name email role { ${permissionsList.join(' ')} }`,
    }),
  })
);
