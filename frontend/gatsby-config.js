module.exports = {
  siteMetadata: {
    title: 'Trident Digest',
    titleTemplate: 'trident-forever',
    twitterUsername: '',
    image: '',
    url: '',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '16limuy3',
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        // Sanity project info (required)
        projectId: '16limuy3',
        dataset: 'production',
        customImageTypes: ['SanityMainImage'],
      },
    },
  ],
};
