import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PortableText from '../components/PortableText';
import SanityImage from 'gatsby-plugin-sanity-image';
import { dateToLocaleString } from '../utils/formatDates';

const PostStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;

  aside {
    display: grid;
    grid-template-rows: auto 1fr;
    max-width: 300px;
    padding: 1rem;
    .date {
      min-height: 80px;
      font-size: 1.5rem;
      text-align: right;
      line-height: 4rem;
      span {
        color: ${({ theme }) => theme.link};
      }
    }
    .post-categories {
      text-transform: uppercase;
      font-weight: 800;
      font-size: 2rem;
      text-align: right;
      line-height: 2rem;
      p {
        display: inline;
        color: ${({ theme }) => theme.link};
      }
      span {
        color: ${({ theme }) => theme.text};
      }
    }
    .authors {
      color: ${({ theme }) => theme.link};
      font-size: 1.5rem;
      text-align: right;
      padding-bottom: 2rem;
      border-bottom: 1px solid ${({ theme }) => theme.text};
      span {
        color: ${({ theme }) => theme.text};
      }
    }
    .related-content {
      padding-top: 1rem;
      text-align: right;
      h3 {
        font-size: 3rem;
        text-transform: uppercase;
        font-weight: 800;
        margin: 0;
      }
      div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin: 1rem 0;
        line-height: 2rem;
        a {
          align-self: center;
        }
        p {
          font-size: 2rem;
          font-weight: 800;
          text-transform: uppercase;
          margin: 0;
          padding: 0;
          color: ${({ theme }) => theme.link};
        }
      }
      .no-related-content {
      }
    }
  }
  article {
    display: grid;
    grid-template-rows: auto 1fr;
    padding: 1rem;
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-size: 1.2rem;
        line-height: 1.2rem;
        display: inline;
      }
    }
    .main-image {
      width: 100%;
    }
    .main-image-caption {
      font-size: 1.5rem;
      font-style: italic;
      margin: -1rem 0 0;
    }
    .title {
      min-height: 80px;
      h2 {
        margin: 0;
        font-size: 4rem;
        font-weight: 800;
        text-transform: uppercase;
      }
    }
    .post-body {
      a {
        color: ${({ theme }) => theme.link};
      }
      blockquote {
        background: ${({ theme }) => theme.quoteBg};
        border-radius: 10px;
        margin: 1.5em 10px;
        padding: 0.5em 10px;
      }
      blockquote:before {
        color: ${({ theme }) => theme.quoteMarks};
        content: open-quote;
        font-size: 4em;
        line-height: 0.1em;
        margin-right: 0.25em;
        vertical-align: -0.4em;
      }
      blockquote p {
        display: inline;
      }
    }
  }
`;

const Post = ({ data: { post } }) => {
  let results = [];
  post.categories?.map((relatedCategory) => {
    relatedCategory.posts.map((relatedPost) => {
      if (relatedPost._id !== post._id) {
        results.push(relatedPost);
      }
    });
  });
  const relatedContent = results.filter(
    (v, i, a) => a.findIndex((t) => t._id === v._id) === i
  );

  console.log(relatedContent);

  return (
    <PostStyles>
      <aside>
        <div className="date">
          <p>
            Posted on <span>{dateToLocaleString(post.publishedAt)}</span>
          </p>
        </div>
        <div>
          <div className="post-categories">
            {post.categories.map((category, index) => {
              if (index + 1 < post.categories.length) {
                return (
                  <Link
                    to={`/categories/${category.slug.current}`}
                    key={category.id}
                  >
                    <p>
                      {category.title}
                      <span>&ensp;/&ensp;</span>
                    </p>
                  </Link>
                );
              } else {
                return (
                  <Link
                    to={`/categories/${category.slug.current}`}
                    key={category.id}
                  >
                    <p>{category.title}</p>
                  </Link>
                );
              }
            })}
          </div>
          <div className="authors">
            {post.authors.length ? (
              post.authors.map((author, index) => {
                if (index + 1 < post.authors.length) {
                  return (
                    <p key={author.id}>
                      {author.author.name}
                      <span>&ensp;/&ensp;</span>
                    </p>
                  );
                } else {
                  return <p key={author.id}>{author.author.name}</p>;
                }
              })
            ) : (
              <p>Anonymous</p>
            )}
          </div>

          <div className="related-content">
            <h3>Related Things</h3>
            {relatedContent.length ? (
              relatedContent.map((relatedItem) => (
                <div>
                  <Link to={`/posts/${relatedItem.slug.current}`}>
                    <p>{relatedItem.title}</p>
                  </Link>
                  {relatedItem.mainImage && (
                    <Link to={`/posts/${relatedItem.slug.current}`}>
                      <SanityImage
                        {...relatedItem.mainImage}
                        width={100}
                        alt={relatedItem.mainImage.alt}
                        className="main-image"
                      />
                    </Link>
                  )}
                </div>
              ))
            ) : (
              <p className="no-related-content">No related posts...</p>
            )}
          </div>
        </div>
      </aside>
      <article>
        <div className="title">
          <h2>{post.title}</h2>
        </div>
        <div className="post-body">
          {post.mainImage && (
            <>
              <SanityImage
                {...post.mainImage}
                width={1000}
                alt={post.mainImage.alt}
                className="main-image"
              />
              <p className="main-image-caption">{post.mainImage.caption}</p>
            </>
          )}
          {post._rawBody && <PortableText blocks={post._rawBody} />}
        </div>
      </article>
    </PostStyles>
  );
};

export default Post;

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      id
      _id
      title
      publishedAt
      mainImage {
        alt
        caption
        ...ImageWithPreview
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        author {
          id
          name
        }
      }
      categories {
        id
        title
        color
        isMajor
        slug {
          current
        }
        posts {
          title
          _id
          slug {
            current
          }
          mainImage {
            alt
            ...ImageWithPreview
          }
        }
      }
    }
  }
`;
