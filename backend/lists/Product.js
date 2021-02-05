const { Text, Url, Relationship } = require("@keystonejs/fields");
const { atTracking, createdAtField, updatedAtField } = require('@keystonejs/list-plugins');



module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    image: {
      type: Url,
      defaultValue: false,
    },
    productCategories:{
      type: Relationship , 
      ref: 'ProductCategory.products',
      many: true
    },
    exteriorOptions:{
      type: Relationship , 
      ref: 'ExteriorOption.products',
      many: true
    },
    interiorOptions:{
      type: Relationship , 
      ref: 'InteriorOption.products',
      many: true
    },
    hardwareOptions:{
      type: Relationship , 
      ref: 'HardwareOption.products',
      many: true
    },
    glassOptions:{
      type: Relationship , 
      ref: 'GlassOption.products',
      many: true
    },
    screenOptions:{
      type: Relationship , 
      ref: 'ScreenOption.products',
      many: true
    },
    dividedLiteOptions:{
      type: Relationship , 
      ref: 'DividedLiteOption.products',
      many: true
    },
    brickmoldAndTrimOptions:{
      type: Relationship , 
      ref: 'BrickmoldAndTrimOption.products',
      many: true
    },
    operations:{
      type: Relationship , 
      ref: 'Operation.products',
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
