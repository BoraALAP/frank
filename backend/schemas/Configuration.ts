import { text, relationship } from "@keystone-next/fields";

import { list } from "@keystone-next/keystone/schema";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import { cloudinary } from "../lib/cloudinaryConfig";
import { permissions } from "../access";

export const Configuration = list({
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
    name: text({
      isRequired: true,
    }),
    image: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/configurations",
      },
      label: "Source",
    }),
    imageDisplay: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/configurations",
      },
      label: "Source Display",
    }),
    video: text(),
    productCategories: relationship({
      ref: "ProductCategory.configurations",
      many: true,
    }),
    products: relationship({
      ref: "Product.configurations",
      many: true,
    }),
  },
});
