const { Text, Password, Checkbox } = require("@keystonejs/fields");

module.exports = {
  fields: {
  name: { type: Text },
  email: { type: Text },
  password: { type: Password },
  // This field name must match the `idField` setting passed to the auth
  // strategy constructor below
  googleId: { type: Text }, 
  isAdmin:{type: Checkbox, defaultValue: false}
}}