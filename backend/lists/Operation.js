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
    video: {
      type: Url,
      defaultValue: false,
    },
    productCategories:{
      type: Relationship , 
      ref: 'ProductCategory.operations',
      many: true
    },
    products:{
      type: Relationship , 
      ref: 'Product.operations',
      many: true
    },
  },

};
