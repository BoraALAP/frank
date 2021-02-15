import { text,  relationship } from "@keystone-next/fields";
 
import { list } from '@keystone-next/keystone/schema';


export const Product = list({
  fields: {
    name: text({
      isRequired: true,
      isIndexed: true,
    }),
    subtitle: text({
      isRequired: true,
    }),
    image: text(),
    productCategories:relationship({ 
      ref: 'ProductCategory.products',
      many: true
    }),
    
    imageTitle: text({
      isRequired: true,
    }),imageDescription: text({
      ui: { displayMode: 'textarea' },
      
    }),specs: text({
      isRequired: true,
      ui: { displayMode: 'textarea' },
    }),threeImageTitle: text({
    }),threeImageDescription: text({
      ui: { displayMode: 'textarea' },
      
    }),operationsTitle: text({
      
    }),
    operationsSubTitle: text({
      
    }),
    operationsDescription: text({
      ui: { displayMode: 'textarea' },
      
    }),
    operations:relationship({ 
      ref: 'Operation.products',
      many: true
    }),
    exteriorOptions:relationship({ 
      ref: 'Exterior.products', 
      many: true
    }),
    interiorOptions:relationship({ 
      ref: 'Interior.products',
      many: true
    }),
    hardwareKitOptions:relationship({ 
      ref: 'HardwareKit.products',
      many: true
    }),
    glassOptions:relationship({ 
      ref: 'Glass.products',
      many: true
    }),
    screenOptions:relationship({ 
      ref: 'Screen.products',
      many: true
    }),
    dividedLiteOptions:relationship({ 
      ref: 'DividedLite.products',
      many: true
    }),
    brickmoldAndTrimOptions:relationship({ 
      ref: 'BrickmoldAndTrim.products',
      many: true
    }),
    
  },
  

});
