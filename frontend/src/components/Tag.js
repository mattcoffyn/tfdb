import React from 'react';
import styled from 'styled-components';

const TagStyles = styled.span`
  padding: 5px 10px;
  margin: 0 1rem;
`;

const Tag = ({ type }) => {
  const backgroundColours = {
    movie: 'red',
    person: 'green',
    news: 'skyblue',
    funny: 'tomato',
    mcu: 'pink',
  };

  const textColours = {
    movie: 'white',
    person: 'white',
    news: 'black',
    funny: 'white',
    mcu: 'black',
  };

  return (
    <TagStyles
      style={{
        backgroundColor: backgroundColours[type],
        color: textColours[type],
      }}
    >
      {type}
    </TagStyles>
  );
};

export default Tag;
