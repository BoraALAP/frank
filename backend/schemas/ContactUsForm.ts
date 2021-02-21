import { text, integer } from "@keystone-next/fields";

// import { sendEmail } from "../mail";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";

export const ContactUsForm = list({
  access: {
    create: () => true,
    read: () => true,
    update: permissions.canManageContactForm,
    delete: permissions.canManageContactForm,
  },
  ui: {
    hideCreate: (args) => !permissions.canManageContactForm(args),
    hideDelete: (args) => !permissions.canManageContactForm(args),
    isHidden: (args) => !permissions.canManageContactForm(args),
  },
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
    phone: text({
      isRequired: true,
    }),
    company: text({}),
    address: text({}),
    city: text({
      isRequired: true,
    }),
    province: text({
      isRequired: true,
    }),
    postal: text({
      isRequired: true,
    }),
    country: text({
      isRequired: true,
    }),
    comments: text({
      isRequired: true,
      ui: {
        displayMode: "textarea",
      },
    }),
    iam: text({
      isRequired: true,
    }),
    ineed: text({
      isRequired: true,
    }),
  },

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
