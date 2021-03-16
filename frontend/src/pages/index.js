import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
// import FeedItem from '../components/FeedItem';
import SEO from '../components/SEO';

const FeedStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: var(--maxWidth);
`;

const IndexPage = ({ data }) => {
  // const posts = data.posts.nodes;

  return (
    <FeedStyles>
      <SEO />
      <h1>Feed</h1>
      {/* {posts.map((item) => (
        <FeedItem key={item.id} item={item} />
      ))} */}
    </FeedStyles>
  );
};

export default IndexPage;

export const query = graphql`
  query GetAllPosts {
    posts: allSanityPost(sort: { fields: publishedAt, order: DESC }) {
      nodes {
        _createdAt
        _updatedAt
        id
        slug {
          current
        }
        title
        publishedAt
        mainImage {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
        authors {
          author {
            name
            id
          }
        }
        categories {
          id
          title
          color
          isMajor
        }
        _rawExcerpt(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`;
