import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PortableText from '../components/PortableText';
import { GatsbyImage } from "gatsby-plugin-image";
import { dateToLocaleString } from '../utils/formatDates';

const PostStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  .title {
    grid-column: 1/4;
    text-align: center;
    font-size: 6rem;
  }
  aside {
    width: 300px;
  }
  section {
    padding: 1rem;
    border-left: 1px solid var(--lime);
    border-right: 1px solid var(--lime);
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-size: 1.2rem;
      }
    }
  }
`;

const TagStyles = styled.span`
  text-transform: uppercase;
  font-size: 1.2rem;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  color: ${(props) => props.colour};
  font-weight: ${(props) => (props.isMajor ? '400' : '600')};
  border: ${(props) => (props.isMajor ? '1px solid ' : 'none')};
`;

const Post = ({ data: { post } }) => {
  return (
    <PostStyles>
      <h2 className="title">{post.title}</h2>
      {console.log(post.mainImage.asset.fluid)}
      <aside></aside>
      <section>
        <GatsbyImage
          image={post.mainImage.childImageSharp.gatsbyImageData}
          style={{ marginBottom: '2rem' }} />
        <div className="info">
          <p>{`Posted by ${post.authors[0].author.name} on ${dateToLocaleString(
            post.publishedAt
          )}`}</p>
          <div>
            {post.categories.map((category) => (
              <TagStyles
                key={category.id}
                isMajor={category.isMajor}
                colour={category.color}
              >
                {category.title}
                {console.log(category)}
              </TagStyles>
            ))}
          </div>
        </div>
        {post._rawBody && <PortableText blocks={post._rawBody} />}
      </section>
      <aside></aside>
    </PostStyles>
  );
};

export default Post;

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      authors {
        author {
          id
          name
        }
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
      categories {
        id
        title
        color
        isMajor
      }
      id
      mainImage {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
          description
        }
        caption
      }
      title
      publishedAt
    }
  }
`;
