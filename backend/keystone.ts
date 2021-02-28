import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';

// import { extendGraphqlSchema } from './mutations';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

export default config({
  lists: createSchema({
    User,
  }),
  db: {
    adapter: 'mongoose',
    url: process.env.DATABASE_URL,
  },
  // extendGraphqlSchema,
  ui: {
    // Show the UI only for poeple who pass this test
    isAccessAllowed: ({ session }) => !!session,
  },
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  session: withItemData(statelessSessions(sessionConfig), {
    // GraphQL Query
    User: `id name email role`,
  }),
});
