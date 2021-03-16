import React from 'react';
import styled from 'styled-components';
import { dateToLocaleString, isOlderThanAnHour } from '../utils/formatDates';
import { GatsbyImage } from "gatsby-plugin-image";
import PortableText from './PortableText';
import { Link } from 'gatsby';

const FeedItemStyles = styled.div`
  width: 100%;
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`;

const TagStyles = styled.span`
  text-transform: uppercase;
  font-size: 1.2rem;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
`;

const ImageStyles = styled.div`
  max-width: 200px;
  margin-right: 1rem;
`;

const FeedItem = ({ item }) => {
  return (
    <FeedItemStyles>
      {item.categories.map((category) => (
        <TagStyles key={category.id} style={{ color: category.color }}>
          {category.title}
        </TagStyles>
      ))}
      <p>
        {isOlderThanAnHour(item._createdAt, item._updatedAt)
          ? `updated: ${dateToLocaleString(item._updatedAt)}`
          : `${dateToLocaleString(item._createdAt)}`}
      </p>
      <Link to={`/post/${item.slug.current}`}>
        <h2>{item.title}</h2>
      </Link>
      <div>
        {/* <p>{item.excerpt.children.text.blurb}</p> */}
        {item._rawExcerpt && <PortableText blocks={item._rawExcerpt} />}
      </div>
    </FeedItemStyles>
  );
};

export default FeedItem;
