module.exports = {
  siteMetadata: {
    title: 'Trident Digest',
    titleTemplate: 'Trident Digest',
    twitterUsername: '',
    image: '',
    url: '',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '16limuy3',
        dataset: 'production',
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: '16limuy3',
        dataset: 'production',
        customImageTypes: ['SanityMainImage'],
      },
    },
  ],
};
