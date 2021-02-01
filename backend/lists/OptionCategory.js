const { Text, Url, Relationship } = require("@keystonejs/fields");
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
      ref: 'Product.optionCategories',
      many: true
    },
    options:{
      type: Relationship , 
      ref: 'Option.optionCategories',
      many: true
    },
    productCategories:{
      type: Relationship , 
      ref: 'ProductCategory.optionCategories',
      many: true
    },
  },
  plugins: [
    atTracking({
      createdAtField,
      updatedAtField
    }),
  ],

};
