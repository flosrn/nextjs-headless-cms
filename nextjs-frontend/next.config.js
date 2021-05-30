const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  // withPWA({
  future: {
    webpack5: true,
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  images: {
    domains: ["api.nextjs-headless-cms.tech", "tailwindui.com", "images.unsplash.com", "localhost"],
  },
  // pwa: {
  //   // disable: process.env.NODE_ENV === "development",
  //   disable: true,
  //   dest: "public",
  //   swSrc: "service-worker.js",
  // },
  // })
});
