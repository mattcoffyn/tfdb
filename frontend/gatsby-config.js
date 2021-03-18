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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,

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
