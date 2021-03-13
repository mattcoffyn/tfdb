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
`;

function mergeDataSources(a, b, c) {
  // const newA = [...a];
  // const newB = [...b];
  // Array.prototype.push.apply(newA, newB);
  const newA = a.concat(a, b, c);
  newA.sort((a, b) =>
    a._updatedAt < b._updatedAt ? 1 : b._updatedAt < a._updatedAt ? -1 : 0
  );
  return newA;
}

const IndexPage = ({ data }) => {
  const [feedData, setFeedData] = React.useState(
    mergeDataSources(data.movies.nodes, data.people.nodes, data.news.nodes)
  );

  return (
    <FeedStyles>
      <SEO />
      <h1>Feed</h1>
      {feedData.map((item) => (
        <FeedItem key={item.id} item={item} />
      ))}
    </FeedStyles>
  );
};

export default IndexPage;

export const query = graphql`
  query GetAllMovies {
    movies: allSanityMovie {
      nodes {
        _type
        id
        title
        overview {
          children {
            text
          }
        }
        slug {
          current
        }
        tags {
          title
        }
        poster {
          asset {
            fluid(maxWidth: 200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _createdAt
        _updatedAt
      }
    }
    people: allSanityPerson(
      sort: { fields: _updatedAt, order: DESC }
      limit: 10
    ) {
      nodes {
        id
        _type
        name
        image {
          asset {
            fluid(maxWidth: 200) {
              ...GatsbySanityImageFluid
            }
            description
          }
        }
        _createdAt
        _updatedAt
      }
    }
    news: allSanityNews {
      nodes {
        _type
        _createdAt
        _updatedAt
        id
        content
        blurb
        title
      }
    }
  }
`;
