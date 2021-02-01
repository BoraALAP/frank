const { Text, Url, Relationship } = require("@keystonejs/fields");
const { atTracking, createdAtField, updatedAtField } = require('@keystonejs/list-plugins');



module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    deafultImage: {
      type: Url,
      defaultValue: false,
    },
    productCategories:{
      type: Relationship , 
      ref: 'ProductCategory.products',
      many: true
    },
    optionCategories:{
      type: Relationship , 
      ref: 'OptionCategory.products',
      many: true
    },
    options:{
      type: Relationship , 
      ref: 'Option.products',
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
