import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "components/sections/blog-page/container";
import PostBody from "components/sections/blog-page/post-body";
import MoreStories from "components/sections/blog-page/more-stories";
import Header from "components/sections/blog-page/header";
import PostHeader from "components/sections/blog-page/post-header";
import SectionSeparator from "components/sections/blog-page/section-separator";
import Layout from "components/sections/blog-page/layout";
import PostTitle from "components/sections/blog-page/post-title";
import { CMS_NAME } from "lib/constants";
import LayoutPage from "components/ui/layout-page";

interface PostProps {
  post: any;
  morePosts: any;
  preview: boolean;
}

const Post: React.FC<PostProps> = ({ post, morePosts, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <LayoutPage>
      <Layout preview={preview}>
        <Container>
          <Header />
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <Head>
                  <title>
                    {post.title} | Next.js Blog Example with {CMS_NAME}
                  </title>
                  <meta property="og:image" content={post.ogImage.url} />
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </LayoutPage>
  );
};

// export const getStaticProps: GetStaticProps = async ({ params, preview = null }) => {
//   const data = await getPostAndMorePosts(params.slug, preview);
//   const content = await markdownToHtml(data?.posts[0]?.content || "");
//   return {
//     props: {
//       preview,
//       post: {
//         ...data?.posts[0],
//         content,
//       },
//       morePosts: data?.morePosts,
//     },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const allPosts = await getAllPostsWithSlug();
//   return {
//     paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
//     fallback: true,
//   };
// };

export default Post;
