import React from 'react';
import { graphql, Link } from 'gatsby';

const posts = ({ data }) => {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {data.posts.nodes.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.slug.current}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default posts;

export const query = graphql`
  query GetPosts {
    posts: allSanityPost {
      nodes {
        id
        slug {
          current
        }
        title
      }
    }
  }
`;
