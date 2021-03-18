import React from 'react';
import SanityImage from 'gatsby-plugin-sanity-image';

export const Figure = ({ node }) => {
  if (!node || !node.asset || !node.asset._id) {
    return null;
  }

  return (
    <figure>
      <SanityImage
        {...node}
        width={500}
        alt={node.alt}
        className="main-image"
      />
      <figcaption style={{ fontStyle: 'italic' }}>{node.caption}</figcaption>
    </figure>
  );
};
