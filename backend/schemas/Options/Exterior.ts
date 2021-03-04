import { text, relationship } from '@keystone-next/fields';

import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { permissions } from '../../access';
import { cloudinary } from '../../lib/cloudinaryConfig';

export const Exterior = list({
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
        folder: 'frank/exterior',
      },
      label: 'Source',
    }),
    hex: text({}),
    description: text({}),
    products: relationship({
      ref: 'Product.exteriorOptions',
      many: true,
    }),
    productCategories: relationship({
      ref: 'ProductCategory.exteriorOptions',
      many: true,
    }),
    colors: relationship({
      ref: 'ExteriorColor.parent',
      many: true,
    }),
  },
});
