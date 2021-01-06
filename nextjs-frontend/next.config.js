const withPWA = require("next-pwa");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withPWA({
    i18n: {
      locales: ["en", "fr"],
      defaultLocale: "en",
    },
    images: {
      domains: ["tailwindui.com", "images.unsplash.com", "localhost"],
    },
    pwa: {
      disable: process.env.NODE_ENV === "development",
      dest: "public",
      swSrc: "service-worker.js",
    },
  })
);
