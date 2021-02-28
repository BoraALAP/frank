import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

import { User } from './schemas/User';

export default config({
  lists: createSchema({
    User,
  }),
  db: {
    adapter: 'mongoose',
    url: process.env.DATABASE_URL,
  },
  ui: {
    isAccessAllowed: (context) => true,
  },
});
