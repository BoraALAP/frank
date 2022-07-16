import { cloudinaryImage } from "@keystone-next/cloudinary";
import { text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../../access";
import { cloudinary } from "../../lib/cloudinaryConfig";

export const HomePage = list({
  access: {
    create: permissions.canManageProducts,
    read: () => true,
    update: permissions.canManageProducts,
    delete: permissions.canManageProducts,
  },
  ui: {
    // hide the backend UI from regular users
    hideCreate: (args) => !permissions.canManageProducts(args),
    hideDelete: (args) => !permissions.canManageProducts(args),
    isHidden: (args) => !permissions.canManageProducts(args),
  },
  fields: {
    enterenceMessage: text({
      isRequired: true,
      isIndexed: true,

      ui: {
        description: "Enterence Message",
        displayMode: "textarea",
      },
    }),
    pageHighlightImage: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/homePage",
      },
      label: "Highlighted Page Image",
      ui: {
        description: "Image for Highlighted Page",
      },
    }),
    pageHighlightTitle: text({
      label: "Highlighted Page Title",
      ui: {
        description: "Highlighted Page Title",
      },
    }),
    pageHighlightCopy: text({
      label: "Highlighted Page Copy",
      ui: {
        displayMode: "textarea",
        description: "Highlighted Page Copy",
      },
    }),
    pageHighlightUrl: text({
      label: "Highlighted Page Url",
      ui: {
        description: "Highlighted Page Url",
      },
    }),
  },
});
