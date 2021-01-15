import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";
import { getProfilePic } from "utils/functions";
import IToken from "interfaces/token";
import IUser from "interfaces/user";
import IAccount from "interfaces/account";
import ISession from "interfaces/session";
import { authHandler } from "lib/api/authApi";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const options = {
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Credentials({
      name: "Credentials",
      authorize: async (credentials) => {
        try {
          const response = await authHandler(credentials);
          console.log("response.data : ", response.data);
          const user = {
            jwt: response.data.jwt,
            id: response.data.user.id,
            name: response.data.username,
            email: response.data.user.email,
            image: getProfilePic(response.data.user.email),
            isAllowedToSignIn: response.data.user.confirmed,
          };
          if (user.isAllowedToSignIn) {
            return Promise.resolve(user);
          }
          return Promise.reject("/api/auth/verify-request");
        } catch (error) {
          const errorCode = error.response?.data.message[0].messages[0].id;
          const errorMessage = error.response?.data.message[0].messages[0].message;
          console.log("errorCode : ", errorCode);
          console.log("errorMessage : ", errorMessage);
          return Promise.reject(
            `/auth/signin?form=${credentials.formType}&errorCode=${errorCode}&errorMessage=${errorMessage}`
          );
        }
      },
    }),
    // Providers.Email({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    // Providers.Apple({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: {
    //     appleId: process.env.APPLE_ID,
    //     teamId: process.env.APPLE_TEAM_ID,
    //     privateKey: process.env.APPLE_PRIVATE_KEY,
    //     keyId: process.env.APPLE_KEY_ID,
    //   },
    // }),
    // Providers.Auth0({
    //   clientId: process.env.AUTH0_ID,
    //   clientSecret: process.env.AUTH0_SECRET,
    //   domain: process.env.AUTH0_DOMAIN,
    // }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      // async profile(profileData) {
      //   console.log("profileData : ", profileData);
      //   return Promise.resolve(profileData);
      // },
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    // Providers.GitHub({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // Providers.Twitter({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    // }),
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must to install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },

  // You can define custom pages to override the built-in pages.
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: "/auth/signin?form=signup", // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: "/auth/signin?error=", // Error code passed in query string as ?error=
    verifyRequest: "/auth/signin?form=verify-request", // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // signIn: async (user, account, profile) => {
    //   return Promise.resolve(true);
    // },
    redirect: async (_url: string, baseUrl: string) => {
      return Promise.resolve(baseUrl);
    },
    session: async (session: ISession, user: IUser) => {
      session.jwt = user?.jwt;
      session.id = user?.id;
      return Promise.resolve(session);
    },
    jwt: async (token: IToken, user: IUser, account: IAccount) => {
      const isSignIn = !!user;

      if (isSignIn && account.type !== "credentials" && account.type !== "email") {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account.accessToken}`
        );
        token.jwt = response.data.jwt;
        token.id = response.data.user.id;
      }

      if (isSignIn && account.type === "credentials") {
        token.jwt = user.jwt;
        token.id = user.id;
      }
      return Promise.resolve(token);
    },
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: true,
};

export default (req, res) => NextAuth(req, res, options);
