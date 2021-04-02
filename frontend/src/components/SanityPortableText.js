import React from 'react';
import clientConfig from '../../client-config';
import PortableText from '@sanity/block-content-to-react';
import serializers from './serializers';

const SanityPortableText = ({ blocks }) => (
  <PortableText
    blocks={blocks}
    serializers={serializers}
    {...clientConfig.sanity}
  />
);

export default SanityPortableText;
