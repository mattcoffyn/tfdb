export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          // {
          //   name: 'netlify',
          //   options: {
          //     description:
          //       'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
          //     sites: [
          //       {
          //         buildHookId: '604c78cacfdb60bd34498052',
          //         title: 'Sanity Studio',
          //         name: 'tf-blog-studio',
          //         apiId: '6d81c1e3-1b79-414d-903d-0e29ae9fcee9'
          //       },
          //       {
          //         buildHookId: '604c78ca99765abacf0fcc13',
          //         title: 'Blog Website',
          //         name: 'tf-blog-web',
          //         apiId: '8a796fe8-59bb-4fa9-b985-8ac8275d806e'
          //       }
          //     ]
          //   }
          // }
          {
            name: 'gatsby',
            options: {
              sites: [{ siteUrl: 'https://preview-tridentdigest.gtsb.io/' }],
            },
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattcoffyn/tf-blog',
            category: 'Code',
          },
          {
            title: 'Frontend',
            value: 'https://tf-blog-web.netlify.app',
            category: 'apps',
          },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recent blog posts',
        order: '_createdAt desc',
        types: ['post'],
      },
      layout: { width: 'medium' },
    },
  ],
};
