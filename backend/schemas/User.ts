import { text, password } from '@keystone-next/fields';

import { list } from '@keystone-next/keystone/schema';
// import { sendEmail } from "../mail";

export const User = list({
  access: true,

  fields: {
    firstName: text({ isRequired: true, isIndexed: true }),
    lastName: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    companyName: text({ isRequired: true }),
    dealerId: text({}),
  },
});
