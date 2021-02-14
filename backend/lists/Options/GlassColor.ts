import { text,  relationship } from "@keystone-next/fields";
import { atTracking, createdAtField, updatedAtField } from '@keystonejs/list-plugins';
import { list } from '@keystone-next/keystone/schema';
export const GlassColor = list({
  fields: {
    name: text({
      isRequired: true,
    }),
    image: text(),
    description:text({
    }),
    parent:relationship({ 
      ref: 'Glass.colors',
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
