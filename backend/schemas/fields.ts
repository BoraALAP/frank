import { checkbox } from "@keystone-next/fields";

export const permissionFields = {
  canManageRoles: checkbox({
    defaultValue: false,
    label: "User can set CRUD roles",
  }),
  canManageUsers: checkbox({
    defaultValue: false,
    label: "User can create, edit other users",
  }),
  canManageProducts: checkbox({
    defaultValue: false,
    label: "User can update and delete any product",
  }),
  canManageOptions: checkbox({
    defaultValue: false,
    label: "User can update and delete any options",
  }),
  canManageContactForm: checkbox({
    defaultValue: false,
    label: "User can check the contact form",
  }),
  canManageLists: checkbox({
    defaultValue: false,
    label: "User can check or update Dealer list or Imagine Page",
  }),
  dealer: checkbox({
    defaultValue: false,
    label: "This user is a dealer information",
  }),
  hide: checkbox({
    defaultValue: false,
    label: "Hide from the list",
  }),
};

export type Permission = keyof typeof permissionFields;

export const permissionsList: Permission[] = Object.keys(
  permissionFields
) as Permission[];
