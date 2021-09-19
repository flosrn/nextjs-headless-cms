async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getPreviewBlogBySlug(slug) {
  const data = await fetchAPI(
    `
  query BlogBySlug($where: JSON) {
    blogs(where: $where) {
      slug
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  );
  return data?.blogs[0];
}

export async function getAllBlogsWithSlug() {
  const data = await fetchAPI(`
    {
      blogs {
        slug
      }
    }
  `);
  return data?.blogs;
}

export async function getAllBlogsForHome(preview) {
  const data = await fetchAPI(
    `
    query Blogs($where: JSON){
      blogs(sort: "date:desc", limit: 10, where: $where) {
        title
        slug
        excerpt
        date
        coverImage {
          formats
        }
        author {
          name
          picture {
            formats
          }
        }
      }
    }
  `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: "published" }),
        },
      },
    }
  );
  return data?.blogs;
}

export async function getBlogAndMoreBlogs(slug, preview) {
  const data = await fetchAPI(
    `
  query BlogBySlug($where: JSON, $where_ne: JSON) {
    blogs(where: $where) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url
      }
      coverImage {
        formats
      }
      author {
        name
        picture {
          formats
        }
      }
    }
    moreBlogs: blogs(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      excerpt
      date
      coverImage {
        formats
      }
      author {
        name
        picture {
          formats
        }
      }
    }
  }
  `,
    {
      preview,
      variables: {
        where: {
          slug,
          ...(preview ? {} : { status: "published" }),
        },
        where_ne: {
          ...(preview ? {} : { status: "published" }),
          slug_ne: slug,
        },
      },
    }
  );
  return data;
}
