import { text, password, checkbox } from "@keystone-next/fields";
import { list } from '@keystone-next/keystone/schema';

export const BackEndUser = list({
  fields: {
  name: text({ isRequired: true }),
  email: text({ isRequired: true, isUnique: true }),
  password: password(),
  // This field name must match the `idField` setting passed to the auth
  // strategy constructor below
  // googleId: { type: Text }, 
  isAdmin:checkbox()
}})
