import { text, relationship } from '@keystone-next/fields';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { list } from '@keystone-next/keystone/schema';
import { cloudinary } from '../lib/cloudinaryConfig';
import { permissions } from '../access';

export const ProductCategory = list({
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
      isIndexed: true,
    }),
    subtitle: text({}),
    description: text({ ui: { displayMode: 'textarea' } }),
    image: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: 'frank/productCategory',
      },
      label: 'Source',
    }),
    products: relationship({
      ref: 'Product.productCategories',
      many: true,
    }),
    exteriorOptions: relationship({
      ref: 'Exterior.productCategories',
      many: true,
    }),
    interiorOptions: relationship({
      ref: 'Interior.productCategories',
      many: true,
    }),
    hardwareKitOptions: relationship({
      ref: 'HardwareKit.productCategories',
      many: true,
    }),
    glassOptions: relationship({
      ref: 'Glass.productCategories',
      many: true,
    }),
    screenOptions: relationship({
      ref: 'Screen.productCategories',
      many: true,
    }),
    dividedLiteOptions: relationship({
      ref: 'DividedLite.productCategories',
      many: true,
    }),
    brickmoldAndSubsillOptions: relationship({
      ref: 'BrickmoldAndSubsill.productCategories',
      many: true,
    }),
    operations: relationship({
      ref: 'Operation.productCategories',
      many: true,
    }),
  },
});
