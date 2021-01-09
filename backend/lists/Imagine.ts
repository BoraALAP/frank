const { Text, Url, Select } = require("@keystonejs/fields");
const { atTracking, createdAtField, updatedAtField } = require('@keystonejs/list-plugins');

const productOptions = [{value:"CORE", label: "Core"}, {value:"COREPLUS", label: "Core+"}, {value:"ENERSENSE", label: "Enersense"}, {value:"PRISM", label: "Prism"}, {value:"DESIGNER", label: "Designer"}, {value:"CLASSIC", label: "Classic"}, {value:"ARTISAN", label: "Artisan"}, {value:"MOOSE", label: "Moose"}, {value:"MOOSEPLUS", label: "Moose+"}, {value:"ORCHESTRADOOR", label: "Orchestra Door"}, {value:"FOLDINGDOOR", label: "Folding Door"}, {value:"LIFTANDSLIDE", label: "Lift And Slide"}]

module.exports = {
  fields: {
    src:{
      type: Url,
      isRequired: true,
    },
    description:{
      type: Text,
    },
    productName:{
      type:Select,
      options: productOptions
    },
  },
  plugins: [
    atTracking({
      createdAtField,
      updatedAtField
    }),
  ],
}
