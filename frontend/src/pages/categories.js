import React from 'react';
import { graphql, Link } from 'gatsby';

const posts = ({ data }) => {
  return (
    <>
      <h1>Categories</h1>
      <ul>
        {data.categories.nodes.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.slug.current}`}>
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default posts;

export const query = graphql`
  query GetCategories {
    categories: allSanityCategory {
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
