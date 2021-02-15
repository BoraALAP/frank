import { text,  relationship } from "@keystone-next/fields";
 
import { list } from '@keystone-next/keystone/schema';

export const DividedLite = list({
  fields: {
    name: text({
      isRequired: true, 
    }),
    image: text(),
    description:text({
    }),
    products:relationship({ 
      ref: 'Product.dividedLiteOptions',
      many: true
    }),
    productCategories:relationship({ 
      ref: 'ProductCategory.dividedLiteOptions',
      many: true
    }),
  },
  

});
