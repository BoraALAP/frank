const { Text, Url } = require("@keystonejs/fields");

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
  },
};
