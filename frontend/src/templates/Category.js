import { graphql, Link } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import React from 'react';
import styled from 'styled-components';
import FeedItem from '../components/FeedItem';

const CategoryPostPageStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  h1 {
    margin: 0;
    font-size: 5rem;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
  }
`;

const CategoryPostTemplate = ({ data: { category } }) => {
  return (
    <CategoryPostPageStyles>
      <h1>{category.title}</h1>
      {category.posts.length ? (
        category.posts.map((post) => <FeedItem key={post._id} post={post} />)
      ) : (
        <p>No posts yet...</p>
      )}
    </CategoryPostPageStyles>
  );
};

export default CategoryPostTemplate;

export const query = graphql`
  query($slug: String!) {
    category: sanityCategory(slug: { current: { eq: $slug } }) {
      id
      title
      posts {
        _id
        title
        publishedAt
        _rawExcerpt(resolveReferences: { maxDepth: 10 })
        mainImage {
          alt
          ...ImageWithPreview
        }
        slug {
          current
        }
        categories {
          title
          id
          slug {
            current
          }
        }
        authors {
          author {
            id
            name
          }
        }
      }
    }
  }
`;
