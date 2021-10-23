import { text, relationship, select } from "@keystone-next/fields";

import { list } from "@keystone-next/keystone/schema";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import { permissions } from "../../access";
import { cloudinary } from "../../lib/cloudinaryConfig";

export const DoorSlab = list({
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
        folder: "frank/doorSlab",
      },
      label: "Source",
    }),
    description: text({}),
    material: select({
      dataType: "enum",
      options: [
        { label: "America", value: "America" },
        { label: "Canvas", value: "Canvas" },
        { label: "Mahogany", value: "Mahogany" },
        { label: "Rustic", value: "Rustic" },
        { label: "Oak", value: "Oak" },
        { label: "Walnut", value: "Walnut" },
      ],
      ui: { displayMode: "select" },
    }),
    products: relationship({
      ref: "Product.doorSlabOptions",
      many: true,
    }),
    productCategories: relationship({
      ref: "ProductCategory.doorSlabOptions",
      many: true,
    }),
  },
});
