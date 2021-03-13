import React from 'react';
import styled from 'styled-components';
import { dateToLocaleString, isOlderThanAnHour } from '../utils/formatDates';
import Tag from './Tag';
import Img from 'gatsby-image';

const FeedItemStyles = styled.div`
  width: 100%;
  padding: 2rem;
  border-bottom: 1px solid black;
  div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`;

const ImageStyles = styled.div`
  max-width: 200px;
  margin-right: 1rem;
`;

const MovieItem = ({ movie }) => {
  return (
    <FeedItemStyles>
      <Tag type={movie._type} />

      {movie.tags.map((tag) => (
        <Tag type={tag.title} />
      ))}

      <p>
        {isOlderThanAnHour(movie._createdAt, movie._updatedAt)
          ? `updated: ${dateToLocaleString(movie._updatedAt)}`
          : `${dateToLocaleString(movie._createdAt)}`}
      </p>
      <h2>{movie.title}</h2>
      <div>
        <ImageStyles>
          <Img fluid={movie.poster.asset.fluid} />
        </ImageStyles>
        <p>{movie.overview[0].children[0].text}</p>
      </div>
    </FeedItemStyles>
  );
};

function PersonItem({ person }) {
  return (
    <FeedItemStyles className="grid-item">
      <Tag type={person._type} />
      <p>
        {isOlderThanAnHour(person._createdAt, person._updatedAt)
          ? `updated: ${dateToLocaleString(person._updatedAt)}`
          : `${dateToLocaleString(person._createdAt)}`}
      </p>
      <h2>{person.name}</h2>
      <div>
        {person.image?.asset?.fluid && (
          <ImageStyles>
            <Img fluid={person.image.asset.fluid} />
          </ImageStyles>
        )}
      </div>
    </FeedItemStyles>
  );
}

const NewsItem = ({ news }) => {
  return (
    <FeedItemStyles>
      <Tag type={news._type} />
      <p>
        {isOlderThanAnHour(news._createdAt, news._updatedAt)
          ? `updated: ${dateToLocaleString(news._updatedAt)}`
          : `${dateToLocaleString(news._createdAt)}`}
      </p>
      <h2>{news.title}</h2>
      <div>
        <p>{news.blurb}</p>
      </div>
    </FeedItemStyles>
  );
};

const FeedItem = ({ item }) => {
  if (item?._type === 'movie') {
    return <MovieItem movie={item} />;
  }
  if (item?._type === 'person') {
    return <PersonItem person={item} />;
  }
  if (item?._type === 'news') {
    return <NewsItem news={item} />;
  }
};

export default FeedItem;
