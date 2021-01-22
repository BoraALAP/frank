const { Text, Float, Select, Password, Checkbox, DateTimeUtc } = require("@keystonejs/fields");
const { atTracking, createdAtField, updatedAtField } = require('@keystonejs/list-plugins');
const { createUser } = require('@keystonejs/server-side-graphql-client');

const contactUsClient = require('../emailTemplate/contactUsClient.jsx')
const { sendEmail } = require('../mail');

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
    companyName: {
      type: Text,
      isRequired: true,
    },
    resetToken: {type:Text},
    resetTokenExpiry:{type: Float},
    permission: { type: Select, options: userOptions, dataType: 'enum' },
    isDealer: { type: Checkbox, default: false },
    lastLogin: { type: DateTimeUtc },
  },
  plugins: [
    atTracking({
      createdAtField,
      updatedAtField
    }),
  ],  
  hooks: {
    afterChange: async ({ updatedItem, existingItem }) => {      
      if (existingItem && updatedItem.password !== existingItem.password) {       
        const props = {
          recipientEmail: existingItem.email,
          url: `${process.env.FRONTEND_URL}/signin`,
        };
        console.log("something is happening");
  
        await sendEmail('password-updated.jsx', props);
      }
      return updatedItem
    },
  },
};



