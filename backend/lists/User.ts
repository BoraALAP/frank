const { Text, Float, Select, Password } = require("@keystonejs/fields");
const { atTracking, createdAtField, updatedAtField } = require('@keystonejs/list-plugins');

const userOptions = ["ADMIN", "USER", "PERMISSIONUPDATE"]

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    email: {
      type:Text,
      isRequired: true,
      isUnique: true
    },
    password: { type: Password, isRequired: true, },
    resetToken: {type:Text},
    resetTokenExpiry:{type: Float},
    permission: { type: Select, options: userOptions, dataType: 'enum' },
  },
  plugins: [
    atTracking({
      createdAtField,
      updatedAtField
    }),
  ],
};
