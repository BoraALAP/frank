const withImages = require("next-images");
module.exports = withImages({
  images: {
    loader: "cloudinary",
    domains: [
      "s3.amazonaws.com",
      "res.cloudinary.com",
      "frankwd.com",
      "www.frankwd.com",
    ],
    path: "/_next/image",
    loader: "default",
  },
  experimental: {
    nextScriptWorkers: true,
  },
});
