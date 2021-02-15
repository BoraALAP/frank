import { text,  relationship } from "@keystone-next/fields";
 
import { list } from '@keystone-next/keystone/schema';
export const Glass = list({
  fields: {
    name: text({
      isRequired: true,
    }),
    image: text(),
    description:text({
    }),
    products:relationship({ 
      ref: 'Product.glassOptions',
      many: true
    }),
    productCategories:relationship({ 
      ref: 'ProductCategory.glassOptions',
      many: true
    }),
    colors:relationship({ 
      ref: 'GlassColor.parent',
      many: true
    }),

  },
  

});
