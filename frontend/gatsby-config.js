module.exports = {
  siteMetadata: {
    title: 'trident-forever',
    titleTemplate: 'trident-forever',
    twitterUsername: '',
    image: '',
    url: '',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '16limuy3',
        dataset: 'production',
      },
    },
  ],
};
