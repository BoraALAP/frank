import { text, relationship } from "@keystone-next/fields";
import { atTracking, createdAtField, updatedAtField } from '@keystonejs/list-plugins';
import { list } from '@keystone-next/keystone/schema';


export const ProductCategory = list({
  fields: {
    name: text({
      isRequired: true,
      isIndexed: true,
    }),
    description:text({
    }),
    products:relationship({ 
      ref: 'Product.productCategories',
      many: true
    }),
    exteriorOptions:relationship({ 
      ref: 'Exterior.productCategories',
      many: true
    }),
    interiorOptions:relationship({ 
      ref: 'Interior.productCategories',
      many: true
    }),
    hardwareKitOptions:relationship({ 
      ref: 'HardwareKit.productCategories',
      many: true
    }),
    glassOptions:relationship({ 
      ref: 'Glass.productCategories',
      many: true
    }),
    screenOptions:relationship({ 
      ref: 'Screen.productCategories',
      many: true
    }),
    dividedLiteOptions:relationship({ 
      ref: 'DividedLite.productCategories',
      many: true
    }),
    brickmoldAndTrimOptions:relationship({ 
      ref: 'BrickmoldAndTrim.productCategories',
      many: true
    }),
    operations:relationship({ 
      ref: 'Operation.productCategories',
      many: true
    })
  },
  plugins: [
    atTracking({
      createdAtField,
      updatedAtField
    }),
  ],

});
