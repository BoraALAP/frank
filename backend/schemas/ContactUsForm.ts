import { text, integer  } from "@keystone-next/fields";
import { atTracking, createdAtField, updatedAtField } from '@keystonejs/list-plugins';
// import { sendEmail } from "../mail";
import { list } from '@keystone-next/keystone/schema';


export const ContactUsForm = list({
  fields: {
    firstName: text({
      isRequired: true,
    }),
    lastName: text({
      isRequired: true,
    }),
    email: text({
      isRequired: true,
    }),
    phone:integer({

      isRequired: true,
    })
    ,
    company:text({
    }),
    address:text({
    }),
    city:text({
      isRequired: true,
    }),
    province:text({
      isRequired: true,
    }),
    postal:text({
      isRequired: true,
    }),
    country:text({
      isRequired: true,
    }),
    comments:text({
      isRequired: true,
    }),
    iam:text({
      isRequired: true,
    }),
    ineed:text({
      isRequired: true,
    }),
  },
  plugins: [
    atTracking({
      createdAtField,
      updatedAtField
    }),
  ],
  // hooks:{
  //   afterChange: async({updatedItem, existingItem}) => {
  //     console.log(updatedItem , "updated");
  //     console.log(existingItem , "existing");
  //     if(updatedItem) {

  //       const props = {
  //         recipientEmail: process.env.RECEIVER,
  //         info: updatedItem,
  //         subject: `Contact Us ${updatedItem.firstName}`,
  //       };
    
  //       await sendEmail("contactUsForm.jsx", props);
  //     }
  //   }
  // }
});
