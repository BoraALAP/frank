import { text, relationship } from '@keystone-next/fields';

import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { cloudinary } from '../../lib/cloudinaryConfig';
import { permissions } from '../../access';

export const HardwareKit = list({
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
      cloudinary,
      label: 'Source',
    }),
    description: text({}),
    products: relationship({
      ref: 'Product.hardwareKitOptions',
      many: true,
    }),
    productCategories: relationship({
      ref: 'ProductCategory.hardwareKitOptions',
      many: true,
    }),
  },
});
