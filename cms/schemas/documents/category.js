import React from 'react';

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'What is the category name?',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'What is this category for? (internal use only) ',
    },
    {
      name: 'isMajor',
      type: 'boolean',
      title: 'Major ?',
      description: 'Is this category major cool?',
    },
    {
      name: 'color',
      type: 'colorPicker',
      title: 'Tag Colour',
      description: 'Set the colour for the category tag on the feed',
    },
  ],
  orderings: [
    {
      title: 'Major Category',
      name: 'majorCategoryDesc',
      by: [{ field: 'isMajor', direction: 'desc' }],
    },
    {
      title: 'Not Major Category',
      name: 'majorCategoryAsc',
      by: [{ field: 'isMajor', direction: 'asc' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'isMajor',
      media: 'color',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle ? '❗ Major Category' : '',
        media: (
          <span
            style={{
              width: '30px',
              height: '30px',
              background: media,
              borderRadius: '15px',
            }}
          />
        ),
      };
    },
  },
};
