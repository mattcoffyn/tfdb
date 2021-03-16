import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import clientConfig from '../../client-config';

export default ({ node }) => {
  console.log();

  if (!node || !node.asset || !node.asset._id) {
    return null;
  }
  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 1200 },
    clientConfig.sanity
  );
  return (
    <figure>
      <GatsbyImage image={fluidProps} alt={node.alt} style={{ padding: '3rem' }} />
      <figcaption style={{ fontStyle: 'italic' }}>{node.caption}</figcaption>
    </figure>
  );
};
