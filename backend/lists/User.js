const {
  Text,
  Float,
  Select,
  Password,
  Checkbox,
  DateTimeUtc,
} = require("@keystonejs/fields");
const {
  atTracking,
  createdAtField,
  updatedAtField,
} = require("@keystonejs/list-plugins");

const { sendEmail } = require("../mail");

const userOptions = ["ADMIN", "USER", "PERMISSIONUPDATE"];

module.exports = {
  access: true,
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    email: {
      type: Text,
      isRequired: true,
      isUnique: true,
    },
    password: { type: Password, isRequired: true },
    companyName: {
      type: Text,
      isRequired: true,
    },
    permission: { type: Select, options: userOptions, dataType: "enum" },
    isDealer: { type: Checkbox, default: false },
    isAdmin: { type: Checkbox, default: false },
    lastLogin: { type: DateTimeUtc },
  },
  plugins: [
    atTracking({
      createdAtField,
      updatedAtField,
    }),
  ],
  hooks: {
    afterChange: async ({ updatedItem, existingItem }) => {
      //PASSWORD UPDATE - if password is updated send an email
      if (existingItem && updatedItem.password !== existingItem.password) {
        const props = {
          recipientEmail: existingItem.email,
          url: `${process.env.FRONTEND_URL}/user/signin`,
          subject: "Your password has been updated",
        };

        await sendEmail("password-updated.jsx", props);
      }
      return updatedItem;
    },
  },
};
