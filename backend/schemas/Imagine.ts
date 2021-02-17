import { text, select, relationship } from "@keystone-next/fields";

import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";

export const Imagine = list({
  access: {
    create: permissions.canManageProducts,
    read: () => true,
    update: permissions.canManageProducts,
    delete: permissions.canManageProducts,
  },
  ui: {
    // hide the backend UI from regular users
    hideCreate: (args) => !permissions.canManageProducts(args),
    hideDelete: (args) => !permissions.canManageProducts(args),
    isHidden: (args) => !permissions.canManageProducts(args),
  },
  fields: {
    src: text({
      isRequired: true,
    }),
    description: text({}),
    product: relationship({
      ref: "Product",
      many: true,
    }),
  },
});
