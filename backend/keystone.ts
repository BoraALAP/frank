import 'dotenv/config';
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

import { ProductCategory } from './schemas/ProductCategory';
import { Product } from './schemas/Product';

import { Operation } from './schemas/Operation';
import { Imagine } from './schemas/Imagine';
import { Dealer } from './schemas/Dealer';
import { ContactUsForm } from './schemas/ContactUsForm';
import { User } from './schemas/User';

import { forgotPasswordEmail } from './lib/mail';
// import { extendGraphqlSchema } from './mutations';

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
    fields: ['firstName', 'lastName', 'email', 'password', 'companyName'],
  },
  passwordResetLink: {
    async sendToken(args) {
      // send the email
      await forgotPasswordEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    lists: createSchema({
      User,
      Role,
      Product,
      ProductCategory,
      Operation,
      Imagine,
      Dealer,
      ContactUsForm,
      Exterior,
      Interior,
      Glass,
      GlassColor,
      HardwareKit,
      Screen,
      DividedLite,
      BrickmouldAndTrim,
    }),
    db: {
      adapter: 'mongoose',
      url: process.env.DATABASE_URL,
    },
    // extendGraphqlSchema,
    ui: {
      // Show the UI only for poeple who pass this test
      isAccessAllowed: ({ session }) => !!session.data,
    },
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // GraphQL Query
      User: `id name email role { ${permissionsList.join(' ')} }`,
    }),
  })
);
