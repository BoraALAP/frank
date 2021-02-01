const { Text, Relationship } = require("@keystonejs/fields");
const { atTracking, createdAtField, updatedAtField } = require('@keystonejs/list-plugins');



module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    bodyCopy:{
      type: Text,
    },
    products:{
      type: Relationship , 
      ref: 'Product.productCategories',
      many: true
    },
    options:{
      type: Relationship , 
      ref: 'Option.productCategories',
      many: true
    },
    optionCategories:{
      type: Relationship , 
      ref: 'OptionCategory.productCategories',
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
