import React from "react";
import Layout from "components/layout";

const AuthFeaturePage: React.FC = () => {
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
      </p>
    </Layout>
  );
};

export default AuthFeaturePage;
