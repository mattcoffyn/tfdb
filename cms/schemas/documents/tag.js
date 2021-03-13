import { FaTags as icon } from 'react-icons/fa';

export default {
  name: 'tags',
  title: 'Tags',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Tag',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      // media: 'movie.poster',
    },
  },
};
