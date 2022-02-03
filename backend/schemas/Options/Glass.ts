import { text, relationship, select } from "@keystone-next/fields";

import { list } from "@keystone-next/keystone/schema";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import { permissions } from "../../access";
import { cloudinary } from "../../lib/cloudinaryConfig";

export const Glass = list({
  access: {
    create: permissions.canManageOptions,
    read: () => true,
    update: permissions.canManageOptions,
    delete: permissions.canManageOptions,
  },
  ui: {
    hideCreate: (args) => !permissions.canManageOptions(args),
    hideDelete: (args) => !permissions.canManageOptions(args),
    isHidden: (args) => !permissions.canManageOptions(args),
  },
  fields: {
    name: text({
      isRequired: true,
    }),
    image: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/glass",
      },
      label: "Source",
    }),
    description: text({}),
    type: select({
      dataType: "enum",
      options: [
        { label: "Design", value: "Design" },
        { label: "Privacy", value: "Privacy" },
      ],
      ui: { displayMode: "select" },
    }),
    products: relationship({
      ref: "Product.glassOptions",
      many: true,
    }),
    productCategories: relationship({
      ref: "ProductCategory.glassOptions",
      many: true,
    }),
    colors: relationship({
      ref: "GlassColor.parent",
      many: true,
    }),
  },
});
