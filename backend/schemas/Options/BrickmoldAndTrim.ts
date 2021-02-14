import { text,  relationship } from "@keystone-next/fields";
import { atTracking, createdAtField, updatedAtField } from '@keystonejs/list-plugins';
import { list } from '@keystone-next/keystone/schema';

export const BrickmoldAndTrim = list({
  fields: {
    name: text({
      isRequired: true,
    }),
    image: text(),
    description:text({
    }),
    products:relationship({ 
      ref: 'Product.brickmoldAndTrimOptions',
      many: true
    }),
    productCategories:relationship({ 
      ref: 'ProductCategory.brickmoldAndTrimOptions',
      many: true
    }),
  },
  plugins: [
    atTracking({
      createdAtField,
      updatedAtField
    }),
  ],

});
