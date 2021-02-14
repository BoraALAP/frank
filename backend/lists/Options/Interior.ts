import { text,  relationship } from "@keystone-next/fields";
import { atTracking, createdAtField, updatedAtField } from '@keystonejs/list-plugins';
import { list } from '@keystone-next/keystone/schema';
export const Interior = list({
  fields: {
    name: text({ isRequired:true,
    }),
    image: text({ 
    }),
    description:text({
    }),
    products:
      relationship ({ 
      ref: 'Product.interiorOptions',
      many: true
    }),
    productCategories:
      relationship ({ 
      ref: 'ProductCategory.interiorOptions',
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
