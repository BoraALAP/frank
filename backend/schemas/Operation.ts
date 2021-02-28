import { text, relationship } from '@keystone-next/fields';

import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { cloudinary } from '../lib/cloudinaryConfig';
import { permissions } from '../access';

export const Operation = list({
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
      cloudinary,
      label: 'Source',
    }),
    video: text(),
    productCategories: relationship({
      ref: 'ProductCategory.operations',
      many: true,
    }),
    products: relationship({
      ref: 'Product.operations',
      many: true,
    }),
  },
});
