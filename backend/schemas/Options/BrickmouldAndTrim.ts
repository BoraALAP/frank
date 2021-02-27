import { text, relationship } from '@keystone-next/fields';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { list } from '@keystone-next/keystone/schema';
import { cloudinary } from '../../lib/cloudinaryConfig';
import { permissions } from '../../access';

export const BrickmouldAndTrim = list({
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
      ref: 'Product.brickmouldAndTrimOptions',
      many: true,
    }),
    productCategories: relationship({
      ref: 'ProductCategory.brickmouldAndTrimOptions',
      many: true,
    }),
  },
});
