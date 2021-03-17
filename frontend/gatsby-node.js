const path = require('path');

async function turnPostsIntoPages({ graphql, actions }) {
  const postTemplate = path.resolve('./src/templates/Post.js');
  const { data } = await graphql(`
    query {
      allSanityPost {
        nodes {
          id
          title
          slug {
            current
          }
        }
      }
    }
  `);
  data.allSanityPost.nodes.forEach((post) => {
    if (!post.slug) {
      console.log(`🤦‍♂️ No slug provided for ${post.title}`);
      return;
    }
    actions.createPage({
      path: `posts/${post.slug.current}`,
      component: postTemplate,
      context: {
        slug: post.slug.current,
      },
    });
  });
}

async function turnCategoriesIntoPages({ graphql, actions }) {
  const categoryTemplate = path.resolve('./src/templates/Category.js');
  const { data } = await graphql(`
    query {
      allSanityCategory {
        nodes {
          title
          id
          slug {
            current
          }
        }
      }
    }
  `);
  data.allSanityCategory.nodes.forEach((category) => {
    if (!category.slug) {
      console.log(`🤦‍♂️ No slug provided for ${category.title}`);
      return;
    }
    actions.createPage({
      path: `categories/${category.slug.current}`,
      component: categoryTemplate,
      context: {
        slug: category.slug.current,
      },
    });
  });
}

exports.createPages = async (params) => {
  await Promise.all([turnPostsIntoPages(params)]);
  await Promise.all([turnCategoriesIntoPages(params)]);
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SanityCategory: {
      posts: {
        type: ['SanityPost'],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            type: 'SanityPost',
            query: {
              filter: {
                categories: {
                  elemMatch: {
                    _id: {
                      eq: source._id,
                    },
                  },
                },
              },
            },
          });
        },
      },
    },
  };
  createResolvers(resolvers);
};
