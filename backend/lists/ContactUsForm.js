const { Text, Float  } = require("@keystonejs/fields");
const { atTracking, createdAtField, updatedAtField } = require('@keystonejs/list-plugins');
const { sendEmail } = require("../mail");

module.exports = {
  fields: {
    firstName: {
      type: Text,
      isRequired: true,
    },
    lastName: {
      type: Text,
      isRequired: true,
    },
    email: {
      type: Text,
      isRequired: true,
    },
    phone:{
      type:Float,
      isRequired: true,
    },
    company:{
      type: Text,
    },
    address:{
      type: Text,
    },
    city:{
      type: Text,
      isRequired: true,
    },
    province:{
      type: Text,
      isRequired: true,
    },
    postal:{
      type: Text,
      isRequired: true,
    },
    country:{
      type: Text,
      isRequired: true,
    },
    comments:{
      type: Text,
      isRequired: true,
    },
    iam:{
      type: Text,
      isRequired: true,
    },
    ineed:{
      type: Text,
      isRequired: true,
    },
  },
  plugins: [
    atTracking({
      createdAtField,
      updatedAtField
    }),
  ],
  hooks:{
    afterChange: async({updatedItem, existingItem}) => {
      console.log(updatedItem , "updated");
      console.log(existingItem , "existing");
      if(updatedItem) {

        const props = {
          recipientEmail: process.env.RECEIVER,
          info: updatedItem,
          subject: `Contact Us ${updatedItem.firstName}`,
        };
    
        await sendEmail("contactUsForm.jsx", props);
      }
    }
  }
};
