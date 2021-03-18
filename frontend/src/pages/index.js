import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import FeedItem from '../components/FeedItem';
import SEO from '../components/SEO';

const FeedStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: var(--maxWidth);
  padding-top: 2rem;
`;

const IndexPage = ({ data }) => {
  // const posts = data.posts.nodes;

  return (
    <FeedStyles>
      <SEO />
      {data.posts.nodes.map((post) => (
        <FeedItem key={post.id} post={post} />
      ))}
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
          alt
          ...ImageWithPreview
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
