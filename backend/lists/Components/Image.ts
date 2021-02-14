import { text,  relationship } from "@keystone-next/fields";
import { atTracking, createdAtField, updatedAtField } from '@keystonejs/list-plugins';

export const Image = {
  fields: {
    name: text({
      isRequired: true,
    }),
    image: text(),
    
    
  },
  plugins: [
    atTracking({
      createdAtField,
      updatedAtField
    }),
  ],

});
