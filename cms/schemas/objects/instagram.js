import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

export const InstagramPreview = ({ value }) => {
  const { url } = value;
  if (!url) {
    return <p>Missing URL for Instagram post</p>;
  }

  return (
    <InstagramEmbed
      url={url}
      clientAccessToken="837112190207262|6d447733533a2e2f21f9f31ddefc5a99"
      maxWidth={480}
      containerTagName="div"
      injectScript
    />
  );
};

export default {
  type: 'object',
  name: 'instagramPost',
  title: 'Instagram Post',
  fields: [
    {
      name: 'url',
      type: 'url',
      description: 'Visit an Instagram post in a browser and copy the URL.',
    },
  ],
  preview: {
    select: { url: 'url' },
    component: InstagramPreview,
  },
};
