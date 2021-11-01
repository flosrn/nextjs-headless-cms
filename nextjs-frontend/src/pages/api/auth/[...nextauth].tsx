import NextAuth from "next-auth";
import axios from "axios";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { getProfilePic } from "src/utils/functions";
import { authHandler } from "src/lib/api/authApi";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
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
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      // authorizationUrl:
      //   "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
      async profile(profileData) {
        console.log("profileData : ", profileData);
        // return Promise.resolve(profileData);
        return {
          ...profileData,
          id: profileData.sub,
        };
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
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
    error: "/auth/signin?error=", // Error code passed in query string as ?error=
    verifyRequest: "/auth/signin?form=verify-request", // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("useraaaaaaaaa : ", user);
      console.log("accountaaaaaaaaaaaa: ", account);
      console.log("profileaaaaaaaaaaaa: ", profile);
      console.log("email : ", email);
      console.log("credentials : ", credentials);
      if (account.provider === "google" && profile.email_verified === true) {
        return true;
      }
      return false;
    },
    async redirect({ url, baseUrl }) {
      return Promise.resolve(baseUrl);
    },
    async session({ session, token, user }) {
      session.jwt = user?.jwt;
      session.id = user?.id;
      return Promise.resolve(session);
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("isNewUser wwww : ", isNewUser);
      console.log("profile wwwwww : ", profile);
      console.log("account wwwww: ", account);
      console.log("user wwwww: ", user);
      console.log("token wwwwww: ", token);
      const isSignIn = !!user;
      console.log("isSignIn : ", isSignIn);
      if (account) {
        token.accessToken = account.access_token;
      }

      if (isSignIn && account.type !== "credentials" && account.type !== "email") {
        console.log(
          "`${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account.access_token}` : ",
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account.access_token}`
        );
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account.access_token}`
        );
        console.log("response: ", response);
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
});
