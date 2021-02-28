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
    description:{
      type: Text,
    },
    products:{
      type: Relationship , 
      ref: 'Product.exteriorOptions',
      many: true
    },
    productCategories:{
      type: Relationship , 
      ref: 'ProductCategory.exteriorOptions',
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