const { Text, Relationship } = require("@keystonejs/fields");
const { atTracking, createdAtField, updatedAtField } = require('@keystonejs/list-plugins');



module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    description:{
      type: Text,
    },
    products:{
      type: Relationship , 
      ref: 'Product.productCategories',
      many: true
    },
    exteriorOptions:{
      type: Relationship , 
      ref: 'ExteriorOption.productCategories',
      many: true
    },
    interiorOptions:{
      type: Relationship , 
      ref: 'InteriorOption.productCategories',
      many: true
    },
    hardwareOptions:{
      type: Relationship , 
      ref: 'HardwareOption.productCategories',
      many: true
    },
    glassOptions:{
      type: Relationship , 
      ref: 'GlassOption.productCategories',
      many: true
    },
    screenOptions:{
      type: Relationship , 
      ref: 'ScreenOption.productCategories',
      many: true
    },
    dividedLiteOptions:{
      type: Relationship , 
      ref: 'DividedLiteOption.productCategories',
      many: true
    },
    brickmoldAndTrimOptions:{
      type: Relationship , 
      ref: 'BrickmoldAndTrimOption.productCategories',
      many: true
    },
    operations:{
      type: Relationship , 
      ref: 'Operation.productCategories',
      many: true
    }
  },
  plugins: [
    atTracking({
      createdAtField,
      updatedAtField
    }),
  ],

};
