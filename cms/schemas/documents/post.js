import { format } from 'date-fns';

export function dateToLocaleString(date) {
  const localeDate = new Date(date).toLocaleDateString();
  return localeDate;
}

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is required to generate the post page',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'authorReference',
        },
      ],
      description:
        'If none selected, the author will be displayed as "Anonymous"',
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category',
          },
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
    },
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      category1: 'categories.0.title',
      category2: 'categories.1.title',
      category3: 'categories.2.title',
    },
    prepare({ title, media, category1, category2, category3 }) {
      const categories = [category1, category2, category3].filter(Boolean);
      const subtitle = categories.length > 0 ? `${categories.join(', ')}` : '';
      return {
        title,
        media,
        subtitle: subtitle,
      };
    },
  },
};
