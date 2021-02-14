import {
  text,

  select,
  password,
  checkbox,

} from "@keystone-next/fields";
import {
  atTracking,
  createdAtField,
  updatedAtField,
} from "@keystonejs/list-plugins";
import { list } from '@keystone-next/keystone/schema';
import { sendEmail } from "../mail";



export const User = list({
  access: true,
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    companyName: text({ isRequired: true }),
    permission: select({ options:[{label:'ADMIN', value:"ADMIN"}, {label:'USER', value:"USER"}, {label:'PERMISSIONUPDATE', value:"PERMISSIONUPDATE"}], dataType: "enum" }),
    isDealer: checkbox(),
  },
  // plugins: [
  //   atTracking({
  //     createdAtField,
  //     updatedAtField,
  //   }),
  // ],
  // hooks: {
  //   afterChange: async ({ updatedItem, existingItem }) => {
  //     //PASSWORD UPDATE - if password is updated send an email
  //     if (existingItem && updatedItem.password !== existingItem.password) {
  //       const props = {
  //         recipientEmail: existingItem.email,
  //         url: `${process.env.FRONTEND_URL}/user/signin`,
  //         subject: "Your password has been updated",
  //       };

  //       await sendEmail("password-updated.jsx", props);
  //     }
  //     return updatedItem;
  //   },
  // },
})
