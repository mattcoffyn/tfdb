import React from 'react';
import { Figure } from './Figure';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import InstagramEmbed from 'react-instagram-embed';

const serializers = {
  types: {
    mainImage: Figure,
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube className="yt-vid" videoId={id} />;
    },
    instagramPost: ({ node }) => {
      const { url } = node;
      return (
        <InstagramEmbed
          url={url}
          clientAccessToken="837112190207262|6d447733533a2e2f21f9f31ddefc5a99"
          className="insta-post"
        />
      );
    },
  },
};

export default serializers;
