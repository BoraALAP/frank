import { cloudinaryImage } from "@keystone-next/cloudinary";
import { text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../../access";
import { cloudinary } from "../../lib/cloudinaryConfig";

export const MeetFrankPage = list({
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
    pageHeader: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/meetFrankPage",
      },
      label: "Header Image",
      ui: {
        description: "This image will be displayed at the top",
      },
    }),
    title: text({
      isRequired: true,

      ui: {
        description: "Page Title",
      },
    }),
    paragraphs1: text({
      label: "Page Top Paragraphs",
      ui: {
        description: "Page top paragraphs",
        displayMode: "textarea",
      },
    }),
    image1: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/meetFrankPage",
      },
      label: "First Image",
      ui: {
        description: "Image 1 between Paragraphs",
      },
    }),
    image2: cloudinaryImage({
      cloudinary: {
        ...cloudinary,
        folder: "frank/meetFrankPage",
      },
      label: "Second Image",
      ui: {
        description: "Image 2 between Paragraphs",
      },
    }),
    paragraphs2: text({
      label: "Page Bottom Paragraphs",
      ui: {
        description: "Page bottom paragraphs",
        displayMode: "textarea",
      },
    }),
  },
});
