import {
  text,
  select,
  password,
  checkbox,
  relationship,
} from "@keystone-next/fields";

import { list } from "@keystone-next/keystone/schema";

import { permissions, rules } from "../access";
// import { sendEmail } from "../mail";

export const User = list({
  access: {
    create: () => true,
    read: rules.canManageUsers,
    update: rules.canManageUsers,
    // only people with the permission can delete themselves!
    // You can't delete yourself
    delete: permissions.canManageRoles,
  },
  ui: {
    // hide the backend UI from regular users
    hideCreate: (args) => !permissions.canManageUsers(args),
    hideDelete: (args) => !permissions.canManageUsers(args),
    isHidden: (args) => !permissions.canManageUsers(args),
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    companyName: text({ isRequired: true }),
    dealerId: text({}),
    role: relationship({
      ref: "Role.assignedTo",
      access: {
        create: permissions.canManageRoles,
        update: permissions.canManageUsers,
      },
      ui: {
        createView: { fieldMode: "hidden" },
        itemView: { fieldMode: "edit" },
      },
    }),
  },
});
