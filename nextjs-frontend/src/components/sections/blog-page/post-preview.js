import Link from "next/link";
import Avatar from "components/sections/blog-page/avatar";
import Date from "components/sections/blog-page/date";
import CoverImage from "components/sections/blog-page/cover-image";

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} coverImage={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href="/blog/[...slug]" as={`/blog/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
