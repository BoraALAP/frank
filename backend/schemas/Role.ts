import { checkbox, relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { permissions, rules } from '../access';

import { permissionFields } from './fields';

export const Role = list({
  access: {
    create: permissions.canManageRoles,
    read: rules.canManageRoles,
    update: permissions.canManageRoles,
    delete: permissions.canManageRoles,
  },
  ui: {
    hideCreate: (args) => !permissions.canManageRoles(args),
    hideDelete: (args) => !permissions.canManageRoles(args),
    isHidden: (args) => !permissions.canManageRoles(args),
  },
  fields: {
    name: text({ isRequired: true }),
    ...permissionFields,
    hide: checkbox({ defaultValue: false }),
    assignedTo: relationship({
      ref: 'User.role', // TODO: Add this to the User
      many: true,
    }),
  },
});

// - Super admin
// -- Can see, edit, create, delete user
// -- Can see, edit, create, delete product
// -- Can see, edit, create, delete options

// - Admin
// -- Can see, edit, create user
// -- Can see, edit, create, delete product
// -- Can see, edit, create, delete options

// - Dealer
// -- No Admin UI
// -- Can see, self edit user
// -- Can see product
// -- Can see options

// - User
// -- No Admin UI
// -- Can see, self edit user
// -- Can see product
// -- Can see options
