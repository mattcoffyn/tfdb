import React from 'react';
import styled from 'styled-components';
import MovieListItem from '../components/MovieListItem';

const MovieListGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  width: 100%;
`;

const films = ({ data }) => {
  return (
    <div>
      <h1>Films</h1>
      <MovieListGridStyles>
        {data.movies.nodes.map((movie) => (
          <MovieListItem movie={movie} />
        ))}
      </MovieListGridStyles>
    </div>
  );
};

export default films;

export const query = graphql`
  query GetMoviePage {
    movies: allSanityMovie(sort: { fields: releaseDate, order: DESC }) {
      nodes {
        id
        title
        slug {
          current
        }
        releaseDate
        poster {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
        overview {
          children {
            text
          }
        }
        crewMembers {
          job
          department
          person {
            id
            name
            image {
              asset {
                fluid(maxWidth: 200) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            slug {
              current
            }
          }
        }
        castMembers {
          characterName
          person {
            id
            image {
              asset {
                fluid(maxWidth: 200) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            name
          }
        }
      }
    }
  }
`;
