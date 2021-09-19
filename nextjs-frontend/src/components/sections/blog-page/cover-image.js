import Link from "next/link";
import Image from "next/image";
import { dashboardURL } from "src/utils/constants";

export default function CoverImage({ title, coverImage, slug }) {
  return (
    <div className="flex justify-center sm:mx-0">
      {slug ? (
        <Link href="/blog/[...slug]" as={`/blog/${slug}`}>
          <a aria-label={title}>
            <Image
              src={`${dashboardURL}${coverImage?.formats.large.url}`}
              width={coverImage?.formats.large.width}
              height={coverImage?.formats.large.height}
              alt={title}
            />
          </a>
        </Link>
      ) : (
        <Image
          src={`${dashboardURL}${coverImage?.formats.large.url}`}
          width={coverImage?.formats.large.width}
          height={coverImage?.formats.large.height}
          alt={title}
        />
      )}
    </div>
  );
}
