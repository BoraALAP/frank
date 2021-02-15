import {
  text,
  select,
  password,
  checkbox,
  relationship
} from "@keystone-next/fields";

import { list } from '@keystone-next/keystone/schema';

import { permissions, rules } from '../access';
// import { sendEmail } from "../mail";



export const User = list({
  access: {
    create: () => true,
    read: rules.canManageUsers,
    update: rules.canManageUsers,
    // only people with the permission can delete themselves!
    // You can't delete yourself
    delete: permissions.canManageUsers,
  },
  ui: {
    // hide the backend UI from regular users
    hideCreate: (args) => !permissions.canManageUsers(args),
    hideDelete: (args) => !permissions.canManageUsers(args),
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    companyName: text({ isRequired: true }),
    permission: select({ options:[{label:'ADMIN', value:"ADMIN"}, {label:'USER', value:"USER"}, {label:'PERMISSIONUPDATE', value:"PERMISSIONUPDATE"}], dataType: "enum" }),
    isDealer: checkbox(),
    role: relationship({
      ref: 'Role.assignedTo',
      access: {
        create: permissions.canManageUsers,
        update: permissions.canManageUsers,
      },
    }),
  },
  // plugins: [
  //   atTracking({
  //     createdAtField,
  //     updatedAtField,
  //   }),
  // ],
  // hooks: {
  //   afterChange: async ({ updatedItem, existingItem }) => {
  //     //PASSWORD UPDATE - if password is updated send an email
  //     if (existingItem && updatedItem.password !== existingItem.password) {
  //       const props = {
  //         recipientEmail: existingItem.email,
  //         url: `${process.env.FRONTEND_URL}/user/signin`,
  //         subject: "Your password has been updated",
  //       };

  //       await sendEmail("password-updated.jsx", props);
  //     }
  //     return updatedItem;
  //   },
  // },
})
