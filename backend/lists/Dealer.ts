const { Text, Float  } = require("@keystonejs/fields");
const { LocationGoogle } = require('@keystonejs/fields-location-google');
const { atTracking, createdAtField, updatedAtField } = require('@keystonejs/list-plugins');


module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    venue: {
      type: LocationGoogle,
      googleMapsKey: process.env.GOOGLE_MAP_API,
    },
    city:{
      type: Text,
    },
    postal:{
      type: Text,
    },
    phone:{
      type:Float,
    },
    email:{
      type: Text,
    },
    person:{
      type: Text,
    },
    province:{
      type: Text,
    }
  },
  plugins: [
    atTracking({
      createdAtField,
      updatedAtField
    }),
  ],
};
