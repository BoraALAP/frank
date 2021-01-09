const { Text, Url, Select } = require("@keystonejs/fields");
const { atTracking, createdAtField, updatedAtField } = require('@keystonejs/list-plugins');

const operationOptions = [
"WINDOW",
"ENTRYDOOR",
 "SLIDINGDOOR"
]

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
    video: {
      type: Url,
      defaultValue: false,
    },
    place:{
      type: Select , 
      options: operationOptions,
      dataType: "enum",
      isRequired: true,
    }
  },

};
