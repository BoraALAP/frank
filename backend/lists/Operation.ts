const { Text, Url, Select } = require("@keystonejs/fields");

const options = [
  {value: "window", name:"Window"},
  {value: "entry", name:"Entry Door"},
  {value: "slider", name:"Sliding Door"}
]

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    defaultImage: {
      type: Url,
      defaultValue: false,
    },
    video: {
      type: Url,
      defaultValue: false,
    },
    place:{
      type: Select , 
      options: options,
      isRequired: true,
      
    }
  },
};
