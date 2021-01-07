import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
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
import markdownToHtml from "lib/markdownToHtml";
import { getAllBlogsWithSlug, getBlogAndMoreBlogs } from "lib/api";

interface PostProps {
  blog: any;
  moreBlogs: any;
  preview: boolean;
}

const Post: React.FC<PostProps> = ({ blog, moreBlogs, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <LayoutPage>
      <section className="mt-3 bg-white mb-56 pt-5 rounded-3xl md:mt-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                      {blog.title} | Next.js Blog Example with {CMS_NAME}
                    </title>
                    <meta property="og:image" content={blog.ogImage.url} />
                  </Head>
                  <PostHeader
                    title={blog.title}
                    coverImage={blog.coverImage}
                    date={blog.date}
                    author={blog.author}
                  />
                  <PostBody content={blog.content} />
                </article>
                <SectionSeparator />
                {moreBlogs?.length > 0 && <MoreStories blogs={moreBlogs} />}
              </>
            )}
          </Container>
        </Layout>
      </section>
    </LayoutPage>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = null,
  locale,
  defaultLocale,
}) => {
  const { table = {} } = await import(`i18n/${locale || defaultLocale}`);
  const data = await getBlogAndMoreBlogs(params.slug, preview);
  const content = await markdownToHtml(data?.blogs[0]?.content || "");
  return {
    props: {
      table,
      preview,
      blog: {
        ...data?.blogs[0],
        content,
      },
      moreBlogs: data?.moreBlogs,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allBlogs = await getAllBlogsWithSlug();
  return {
    paths: allBlogs?.map((blog) => `/blogs/${blog.slug}`) || [],
    fallback: true,
  };
};

export default Post;
