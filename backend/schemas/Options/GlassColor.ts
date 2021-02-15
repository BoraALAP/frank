import { text,  relationship } from "@keystone-next/fields";
 
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
  

});
