const path = require('path');

async function turnPostsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const postTemplate = path.resolve('./src/templates/Post.js');
  // 2. Query all pizzas
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each pizza and create a page for that pizza
  data.posts.nodes.forEach((post) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `post/${post.slug.current}`,
      component: postTemplate,
      context: {
        slug: post.slug.current,
      },
    });
  });
}

exports.createPages = async (params) => {
  await Promise.all([turnPostsIntoPages(params)]);
};
