import { text, password, relationship, checkbox } from "@keystone-next/fields";

import { list } from "@keystone-next/keystone/schema";

import { permissions, rules } from "../access";
import { createAccountEmail } from "../lib/mail";
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
    labelField: "firstName",
  },
  hooks: {
    resolveInput: async (args) => {
      args.operation === "create" &&
        (await createAccountEmail(args.resolvedData));

      return args.resolvedData;
    },
  },
  fields: {
    firstName: text({ isRequired: true, isIndexed: true }),
    lastName: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    companyName: text({ isRequired: true }),
    phone: text({
      isRequired: true,
    }),
    dealer: checkbox({ defaultValue: false }),
    dealerId: text({}),
    role: relationship({
      ref: "Role.assignedTo",
      access: {
        read: permissions.canManageRoles,
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
