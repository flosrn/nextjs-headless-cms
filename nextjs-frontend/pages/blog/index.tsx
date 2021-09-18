import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllBlogsForHome } from "lib/api";
import LayoutPage from "components/ui/layout-page";
import { I18nProps } from "next-rosetta";
import { MyLocale } from "i18n/index";
import Blog from "components/ui/blog";

interface Props {
  preview: boolean;
  allBlogs: any;
}

const BlogPage: React.FC<Props> = ({ allBlogs }) => {
  console.log("allBlogs : ", allBlogs);
  return (
    <LayoutPage>
      <section className="mt-3 mb-56 md:mt-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row flex-wrap mx-auto">
          {allBlogs ? (
            allBlogs.map((blog) => (
              <Link href={`/blog/${blog.slug}`} key={blog.slug}>
                <a className="flex relative w-full md:w-1/2 lg:w-1/3 px-4 py-6">
                  <Blog {...blog} />
                </a>
              </Link>
            ))
          ) : (
            <div className="mt-10 text-center w-full text-4xl text-white">
              Page under construction...
            </div>
          )}
        </div>
      </section>
    </LayoutPage>
  );
};

export const getStaticProps: GetStaticProps<I18nProps<MyLocale>> = async ({
  preview = null,
  locale,
  defaultLocale,
}) => {
  const { table = {} } = await import(`i18n/${locale || defaultLocale}`);
  try {
    const allBlogs = (await getAllBlogsForHome(preview)) || [];
    console.log("allBlogs: ", allBlogs);
    return { props: { table, allBlogs, preview } };
  } catch (error) {
    return { props: { table, allBlogs: null, preview } };
  }
};

export default BlogPage;
