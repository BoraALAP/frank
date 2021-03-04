import { text, relationship } from '@keystone-next/fields';

import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { permissions } from '../../access';
import { cloudinary } from '../../lib/cloudinaryConfig';

export const ExteriorColor = list({
  access: {
    create: permissions.canManageOptions,
    read: () => true,
    update: permissions.canManageOptions,
    delete: permissions.canManageOptions,
  },
  ui: {
    hideCreate: (args) => !permissions.canManageOptions(args),
    hideDelete: (args) => !permissions.canManageOptions(args),
    isHidden: (args) => !permissions.canManageOptions(args),
  },
  fields: {
    name: text({
      isRequired: true,
    }),
    image: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: 'frank/exteriorcolor',
      },
      label: 'Source',
    }),
    description: text({}),
    parent: relationship({
      ref: 'Exterior.colors',
      many: true,
    }),
  },
});
