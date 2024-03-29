import "dotenv/config";
import { createAuth } from "@keystone-next/auth";
import { config, createSchema } from "@keystone-next/keystone/schema";
import {
  withItemData,
  statelessSessions,
} from "@keystone-next/keystone/session";
import { permissionsList } from "./schemas/fields";
import { Role } from "./schemas/Role";
import { HomePage } from "./schemas/Page/HomePage";
import { MeetFrankPage } from "./schemas/Page/MeetFrankPage";
import { Screen } from "./schemas/Options/Screen";
import { HardwareKit } from "./schemas/Options/HardwareKit";
import { HardwareType } from "./schemas/Options/HardwareType";
import { Glass } from "./schemas/Options/Glass";
import { GlassColor } from "./schemas/Options/GlassColor";
import { Exterior } from "./schemas/Options/Exterior";
import { ExteriorColor } from "./schemas/Options/ExteriorColor";
import { Interior } from "./schemas/Options/Interior";
import { InteriorColor } from "./schemas/Options/InteriorColor";
import { DividedLite } from "./schemas/Options/DividedLite";
import { DoorSlab } from "./schemas/Options/DoorSlab";
import { BrickmoldAndSubsill } from "./schemas/Options/BrickmoldAndSubsill";

import { ProductCategory } from "./schemas/ProductCategory";
import { Product } from "./schemas/Product";

import { Operation } from "./schemas/Operation";
import { Configuration } from "./schemas/Configuration";
import { Imagine } from "./schemas/Imagine";
import { Dealer } from "./schemas/Dealer";
import { ContactUsForm } from "./schemas/ContactUsForm";
import { User } from "./schemas/User";

import { forgotPasswordEmail } from "./lib/mail";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
  sameSite: "none",
  secure: true,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["firstName", "lastName", "email", "password", "companyName"],
  },

  passwordResetLink: {
    async sendToken(args) {
      // send the email
      await forgotPasswordEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    lists: createSchema({
      User,
      HomePage,
      MeetFrankPage,
      Role,
      Product,
      ProductCategory,
      Operation,
      Configuration,
      Imagine,
      Dealer,
      ContactUsForm,
      Exterior,
      ExteriorColor,
      Interior,
      InteriorColor,
      Glass,
      GlassColor,
      HardwareKit,
      HardwareType,
      Screen,
      DividedLite,
      BrickmoldAndSubsill,
      DoorSlab,
    }),
    db: {
      adapter: "mongoose",
      url: process.env.DATABASE_URL,
    },
    server: {
      cors: {
        origin: [
          `${process.env.FRONTEND_URL}`,
          `https://${process.env.FRONTEND_URL}`,
          `https://www.${process.env.FRONTEND_URL}`,
          `https://staging.${process.env.FRONTEND_URL}`,
          `http://localhost:7777`,
          "*",
        ],
        credentials: true,
      },
    },
    ui: {
      // Show the UI only for poeple who pass this test
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // GraphQL Query
      User: `id name email role { ${permissionsList.join(" ")} }`,
    }),
  })
);
