import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
  query getBlogs {
    blogs {
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
`;
