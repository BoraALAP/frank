import { text, select, relationship } from "@keystone-next/fields";
 
import { list } from '@keystone-next/keystone/schema';
const productOptions = [{value:"CORE", label: "Core"}, {value:"COREPLUS", label: "Core+"}, {value:"ENERSENSE", label: "Enersense"}, {value:"PRISM", label: "Prism"}, {value:"DESIGNER", label: "Designer"}, {value:"CLASSIC", label: "Classic"}, {value:"ARTISAN", label: "Artisan"}, {value:"MOOSE", label: "Moose"}, {value:"MOOSEPLUS", label: "Moose+"}, {value:"ORCHESTRADOOR", label: "Orchestra Door"}, {value:"FOLDINGDOOR", label: "Folding Door"}, {value:"LIFTANDSLIDE", label: "Lift And Slide"}]

export const Imagine = list({
  fields: {
    src:text({
      isRequired: true,
    }),
    description:text({
    }),
    product:relationship({
      ref:'Product',
      many:true
    })
  },
  
})
