import { text, relationship, select } from "@keystone-next/fields";

import { list } from "@keystone-next/keystone/schema";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import { cloudinary } from "../../lib/cloudinaryConfig";
import { permissions } from "../../access";

export const Screen = list({
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
        folder: "frank/screen",
      },
      label: "Source",
    }),
    imageDisplay: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/screen",
      },
      label: "Source Display",
    }),
    description: text({}),
    type: select({
      dataType: "enum",
      options: [
        { label: "Standard", value: "Standard" },
        { label: "ScreenBars", value: "Screen Bars" },
      ],
      ui: { displayMode: "select" },
    }),
    products: relationship({
      ref: "Product.screenOptions",
      many: true,
    }),
    productCategories: relationship({
      ref: "ProductCategory.screenOptions",
      many: true,
    }),
    url: text({}),
  },
});
