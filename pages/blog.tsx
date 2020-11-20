import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "components/sections/blog/container";
import MoreStories from "components/sections/blog/more-stories";
import HeroPost from "components/sections/blog/hero-post";
import Intro from "components/sections/blog/intro";
import Layout from "components/sections/blog/layout";
import { getAllPostsForHome } from "lib/api";
import { CMS_NAME } from "lib/constants";
import LayoutPage from "components/ui/layout-page";

interface HomePageProps {
  preview: boolean;
  allPosts: any;
}

const HomePage: React.FC<HomePageProps> = ({ allPosts, preview }) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <LayoutPage>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </LayoutPage>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts, preview },
  };
};

export default HomePage;
