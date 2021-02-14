import { text,  relationship } from "@keystone-next/fields";
import { atTracking, createdAtField, updatedAtField } from '@keystonejs/list-plugins';
import { list } from '@keystone-next/keystone/schema';


export const Operation = list({
  fields: {
    name: text({
      isRequired: true,
    }),
    image: text(),
    video: text()
      ,
    productCategories:relationship({ 
      ref: 'ProductCategory.operations',
      many: true
    }),
    products:relationship({ 
      ref: 'Product.operations',
      many: true
    }),
  },

});
