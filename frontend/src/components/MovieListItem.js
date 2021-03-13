import React from 'react';
import styled from 'styled-components';

const MovieListItemStyles = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
`;

const MovieListItem = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieListItem;
