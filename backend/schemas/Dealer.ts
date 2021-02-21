import { text, integer } from "@keystone-next/fields";
import { LocationGoogle } from "@keystonejs/fields-location-google";

import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";

export const Dealer = list({
  access: {
    create: permissions.canManageLists,
    read: () => true,
    update: permissions.canManageLists,
    delete: permissions.canManageLists,
  },
  ui: {
    hideCreate: (args) => !permissions.canManageLists(args),
    hideDelete: (args) => !permissions.canManageLists(args),
    isHidden: (args) => !permissions.canManageLists(args),
  },
  fields: {
    name: text({
      isRequired: true,
    }),
    googlePlaceID: text({}),
    formattedAddress: text({}),
    lat: text({}),
    lng: text({}),
    city: text({}),
    postal: text({}),
    phone: text({}),
    email: text({}),
    person: text({}),
    province: text({}),
  },
});
