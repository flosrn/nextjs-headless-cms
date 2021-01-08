module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("https://api.nextjs-headless-cms.tech"),
  cron: { enabled: false },
  admin: {
    autoOpen: false,
    auth: {
      secret: env("ADMIN_JWT_SECRET", "879c74527cff68e4a1c281c3bd234e0c"),
    },
  },
});
