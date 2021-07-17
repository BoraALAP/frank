import { text } from '@keystone-next/fields';

import { list } from '@keystone-next/keystone/schema';
import { permissions } from '../access';
import { contactUsFormEmail } from '../lib/mail';

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
  hooks: {
    resolveInput: async ({ resolvedData }) => {
      console.log(resolvedData);
      await contactUsFormEmail(resolvedData);
      return resolvedData;
    },
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
        displayMode: 'textarea',
      },
    }),
    iam: text({
      isRequired: true,
    }),
    ineed: text({
      isRequired: true,
    }),
  },
});
