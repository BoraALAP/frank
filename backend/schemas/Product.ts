import { text, relationship } from '@keystone-next/fields';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { list } from '@keystone-next/keystone/schema';
import { permissions } from '../access';
import { cloudinary } from '../lib/cloudinaryConfig';

export const Product = list({
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
      ui: {
        description: 'Product Name',
      },
    }),
    subtitle: text({
      isRequired: true,
      ui: {
        description: 'Category Listing Subtitle',
      },
    }),
    excerpt: text({
      isRequired: true,
      ui: {
        displayMode: 'textarea',
        description: 'Category Listing Subtitle',
      },
    }),
    image: cloudinaryImage({
      cloudinary,
      label: 'Product Image on Category Listing',
      ui: {
        description: 'Category Listing Image',
      },
    }),
    productCategories: relationship({
      ref: 'ProductCategory.products',
      many: true,
    }),
    pageSubtitle: text({
      isRequired: true,
      ui: {
        description: 'Page Subtitle',
      },
    }),
    productImage: cloudinaryImage({
      cloudinary,
      label: 'Product Image',
    }),
    imageTitle: text({
      isRequired: true,
    }),
    imageDescription: text({
      ui: { displayMode: 'textarea' },
    }),
    specs: text({
      isRequired: true,
      ui: { displayMode: 'textarea' },
    }),
    productImage1: cloudinaryImage({
      cloudinary,
      label: 'Product Image 1',
    }),
    secondaryDetailsTitle: text({}),
    secondaryDetailsDescription: text({
      ui: { displayMode: 'textarea' },
    }),
    productImage2: cloudinaryImage({
      cloudinary,
      label: 'Product Image 2',
    }),
    productImage3: cloudinaryImage({
      cloudinary,
      label: 'Product Image 3',
    }),
    productImage4: cloudinaryImage({
      cloudinary,
      label: 'Product Image 4',
    }),

    operationsTitle: text({}),
    operationsSubTitle: text({}),
    operationsDescription: text({
      ui: { displayMode: 'textarea' },
    }),
    operations: relationship({
      ref: 'Operation.products',
      many: true,
    }),
    exteriorOptions: relationship({
      ref: 'Exterior.products',
      many: true,
    }),
    interiorOptions: relationship({
      ref: 'Interior.products',
      many: true,
    }),
    hardwareKitOptions: relationship({
      ref: 'HardwareKit.products',
      many: true,
    }),
    glassOptions: relationship({
      ref: 'Glass.products',
      many: true,
    }),
    screenOptions: relationship({
      ref: 'Screen.products',
      many: true,
    }),
    dividedLiteOptions: relationship({
      ref: 'DividedLite.products',
      many: true,
    }),
    brickmouldAndTrimOptions: relationship({
      ref: 'BrickmouldAndTrim.products',
      many: true,
    }),
  },
});
