import { text,  relationship } from "@keystone-next/fields";
 
import { list } from '@keystone-next/keystone/schema';
export const HardwareKit = list({
  fields: {
    name: text({
      isRequired: true,
    }),
    image: text(),
    description:text({
    }),
    products:relationship({ 
      ref: 'Product.hardwareKitOptions',
      many: true
    }),
    productCategories:relationship({ 
      ref: 'ProductCategory.hardwareKitOptions',
      many: true
    }),
  },
  

});
