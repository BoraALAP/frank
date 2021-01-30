const { Text, Relationship, DateTime } = require("@keystonejs/fields");
const { access } = require("./Custom.js");

const { sendEmail } = require("../mail.js");

module.exports = {
  access: {
    create: true,
    read: true,
    // update: access.userIsAdmin,
    // delete: access.userIsAdmin,
    update: true,
    delete: true,
  },
  fields: {
    user: {
      type: Relationship,
      ref: "User",
      access: {
        // read: access.userIsAdmin,
        read: true,
      },
    },
    token: {
      type: Text,
      isRequired: true,
      isUnique: true,
      access: {
        // read: access.userIsAdmin,
        read: true,
      },
    },
    requestedAt: { type: DateTime, isRequired: true },
    accessedAt: { type: DateTime },
    expiresAt: { type: DateTime, isRequired: true },
  },
  hooks: {
    afterChange: async ({ context, updatedItem, existingItem }) => {
      if (existingItem) return null;
      const now = new Date().toISOString();
      console.log(updatedItem);

      //Step 3 after token is created because of the change collect all the information
      const { data, errors } = await context.executeGraphQL({
        context: context.createContext({ skipAccessControl: true }),
        query: `
        query GetUserAndToken($user: ID!, $now: DateTime!) {
          User( where: { id: $user }) {
            id
            name
            email
          }
          allForgottenPasswordTokens( where: { user: { id: $user }, expiresAt_gte: $now } sortBy:requestedAt_DESC) {
            token
            expiresAt
            id
          }
        }
      `,
        variables: { user: updatedItem.user.toString(), now },
      });

      if (errors) {
        console.error(errors, `Unable to construct password updated email.`);
        return;
      }

      const { allForgottenPasswordTokens, User } = data;
      const forgotPasswordKey = allForgottenPasswordTokens[0].token;

      //Step 4 Send an email
      const props = {
        forgotPasswordUrl: `${process.env.FRONTEND_URL}/user/change-password?key=${forgotPasswordKey}`,
        recipientEmail: User.email,
        recipientName: User.name,
        subject: "Request for password reset",
      };

      await sendEmail("forgot-password.jsx", props);
      return allForgottenPasswordTokens.id
    },
  },
};
