import { text, integer  } from "@keystone-next/fields";
import { LocationGoogle } from '@keystonejs/fields-location-google';
 
import { list } from '@keystone-next/keystone/schema';

export const Dealer = list({
  fields: {
    name: text({
      isRequired: true,
    }),

    city:text({
    }),
    postal:text({
    }),
    phone:integer({
      
    }),
    email:text({
    }),
    person:text({
    }),
    province:text({
    })
  },
  
});
