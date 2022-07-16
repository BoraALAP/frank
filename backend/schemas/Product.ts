import { text, relationship, integer, checkbox } from "@keystone-next/fields";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";
import { cloudinary } from "../lib/cloudinaryConfig";

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
    hide: checkbox({ defaultValue: false }),
    name: text({
      isRequired: true,
      isIndexed: true,
      ui: {
        description: "Product Name",
      },
    }),
    subtitle: text({
      isRequired: true,
      label: "Category Subtitle",
      ui: {
        description: "Category Listing Subtitle",
      },
    }),
    excerpt: text({
      isRequired: true,
      label: "Category Description",
      ui: {
        displayMode: "textarea",
        description: "Category Listing Subtitle",
      },
    }),
    image: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/products",
      },
      label: "Category Listing Product Image",
      ui: {
        description: "Category Listing Image",
      },
    }),
    featured: checkbox({
      defaultValue: false,
      ui: {
        description: "Featured Product on Home Page",
      },
    }),
    featuredImage: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/products",
      },
      label: "Feature Listing Image",
      ui: {
        description: "Feature Listing Image",
      },
    }),
    featuredTitle: text({
      ui: {
        displayMode: "textarea",
        description: "Featured Listing Title",
      },
    }),
    featuredSubtitle: text({
      ui: {
        displayMode: "textarea",
        description: "Featured Listing Subtitle",
      },
    }),

    order: integer({
      defaultValue: 0,
    }),

    productCategories: relationship({
      ref: "ProductCategory.products",
      many: true,
    }),
    pageSubtitle: text({
      isRequired: true,
      ui: {
        description: "Page Subtitle",
      },
    }),
    productImage: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/products",
      },
      label: "Product Image",
    }),
    imageTitle: text({
      isRequired: true,
      label: "Subtitle",
    }),
    imageDescription: text({
      label: "Description",
      ui: { displayMode: "textarea" },
    }),
    specs: text({
      isRequired: true,
      ui: { displayMode: "textarea" },
    }),
    productImage1: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/products",
      },
      label: "Product Image 1",
    }),
    secondaryDetailsTitle: text({ label: "Title next to first image" }),
    secondaryDetailsDescription: text({
      label: "Description next to first image",
      ui: { displayMode: "textarea" },
    }),
    productImage2: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/products",
      },
      label: "Product Image 2",
    }),
    productImage3: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/products",
      },
      label: "Product Image 3",
    }),
    productImage4: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/products",
      },
      label: "Product Image 4",
    }),
    operationsTitle: text({}),
    operationsSubTitle: text({}),
    operationsDescription: text({
      ui: { displayMode: "textarea" },
    }),
    operations: relationship({
      ref: "Operation.products",
      many: true,
    }),
    configurationsTitle: text({}),
    configurationsSubTitle: text({}),
    configurationsDescription: text({
      ui: { displayMode: "textarea" },
    }),
    configurations: relationship({
      ref: "Configuration.products",
      many: true,
    }),
    exteriorOptions: relationship({
      ref: "Exterior.products",
      many: true,
    }),
    interiorOptions: relationship({
      ref: "Interior.products",
      many: true,
    }),
    hardwareKitOptions: relationship({
      ref: "HardwareKit.products",
      many: true,
    }),
    glassOptions: relationship({
      ref: "Glass.products",
      many: true,
    }),
    screenOptions: relationship({
      ref: "Screen.products",
      many: true,
    }),
    dividedLiteOptions: relationship({
      ref: "DividedLite.products",
      many: true,
    }),
    doorSlabOptions: relationship({
      ref: "DoorSlab.products",
      many: true,
    }),
    brickmoldAndSubsillOptions: relationship({
      ref: "BrickmoldAndSubsill.products",
      many: true,
    }),
  },
});
