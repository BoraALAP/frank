import { text, relationship, select } from "@keystone-next/fields";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import { list } from "@keystone-next/keystone/schema";
import { cloudinary } from "../../lib/cloudinaryConfig";
import { permissions } from "../../access";

export const BrickmoldAndSubsill = list({
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
        folder: "frank/brickmold",
      },
      label: "Source",
    }),
    imageDisplay: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/brickmold",
      },
      label: "Source Display",
    }),
    description: text({}),
    type: select({
      dataType: "enum",
      options: [
        { label: "Options", value: "Options" },
        { label: "Comparison", value: "Comparison" },
      ],
      ui: { displayMode: "select" },
    }),
    products: relationship({
      ref: "Product.brickmoldAndSubsillOptions",
      many: true,
    }),
    productCategories: relationship({
      ref: "ProductCategory.brickmoldAndSubsillOptions",
      many: true,
    }),
  },
});
