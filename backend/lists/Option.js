const { Text, Url, Select, Relationship } = require("@keystonejs/fields");
const { atTracking, createdAtField, updatedAtField } = require('@keystonejs/list-plugins');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    defaultImage: {
      type: Url,
      defaultValue: false,
    },
    optionCategories:{
      type: Relationship , 
      ref: 'OptionCategory.options',
      many: true
    },
    products:{
      type: Relationship , 
      ref: 'Product.options',
      many: true
    },
    productCategories:{
      type: Relationship , 
      ref: 'ProductCategory.options',
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
