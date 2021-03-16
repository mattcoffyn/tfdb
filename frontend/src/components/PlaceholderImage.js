import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const PlaceholderImage = () => {
  return (
    <>
      <StaticImage
        StaticImage
        src="../images/placeholder.jpg"
        alt="Placeholder Image"
        placeholder="blurred"
        layout="fixed"
        width={300}
        height={300}
      />
    </>
  );
};
