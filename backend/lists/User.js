const { Text, Password } = require("@keystonejs/fields");

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    password: { type: Password },
  },
};
