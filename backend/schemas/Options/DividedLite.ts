import { text, relationship, select } from "@keystone-next/fields";

import { list } from "@keystone-next/keystone/schema";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import { permissions } from "../../access";
import { cloudinary } from "../../lib/cloudinaryConfig";

export const DividedLite = list({
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
        folder: "frank/divided",
      },
      label: "Source",
    }),
    description: text({}),
    type: select({
      dataType: "enum",
      options: [
        { label: "Design", value: "Design" },
        { label: "BarType", value: "Bar Type" },
        { label: "SDLBarOptions", value: "SDL Bar Options" },
      ],
      ui: { displayMode: "select" },
    }),
    products: relationship({
      ref: "Product.dividedLiteOptions",
      many: true,
    }),
    productCategories: relationship({
      ref: "ProductCategory.dividedLiteOptions",
      many: true,
    }),
  },
});
