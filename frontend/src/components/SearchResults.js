import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SanityImage from 'gatsby-plugin-sanity-image';
import { PlaceholderImage } from './PlaceholderImage';

const SearchResultStyles = styled.div`
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 275px;
  width: 100%;
  max-width: var(--maxWidth);
  transform: translate(-50%, 0%);
  background: ${({ theme }) => theme.bg};
  border: 5px solid ${({ theme }) => theme.text};
  border-bottom: 10px solid ${({ theme }) => theme.text};
  padding: 2rem;
  h2 {
    font-size: 5rem;
    text-align: center;
    margin: 0;
  }
  h3 {
    font-size: 4rem;
    margin: 0;
    padding: 0;
  }
  .no-results {
    text-transform: none;
    color: rgba(255, 255, 255, 0.6);
  }
  .category-list {
    border-bottom: 1px solid ${({ theme }) => theme.text};
    padding-bottom: 1rem;
    div {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 1rem;
      h4 {
        color: red;
        margin: 0 1rem;
        font-size: 2rem;
      }
    }
  }
`;

const PostItemStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  margin: 1rem;
  padding: 2rem 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  .post-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 2rem;
    h4 {
      font-size: 3rem;
    }
    .results-image {
      width: 100%;
      max-width: 300px;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      p {
        color: red;
      }
      span {
        color: ${({ theme }) => theme.text};
        margin: 0;
        padding: 0;
      }
    }
  }
  .results-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;

const SearchResults = ({
  setIsOpen,
  results,
  searchQuery,
  setSearchQuery,
  isLoading,
  inputRef,
}) => {
  const [categoryResults, setCategoryResults] = useState([]);
  const [postResults, setPostResults] = useState([]);

  useEffect(() => {
    let incomingCategoryResults = [];
    let incomingPostResults = [];
    results.map((result) => {
      if (result._type === 'category') {
        incomingCategoryResults.push(result);
      }
      if (result._type === 'post') {
        incomingPostResults.push(result);
      }
      return null;
    });
    setCategoryResults(incomingCategoryResults);
    setPostResults(incomingPostResults);
  }, [results]);

  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, inputRef, setIsOpen]);

  if (isLoading) {
    return (
      <SearchResultStyles>
        <p>Loading...</p>
      </SearchResultStyles>
    );
  }
  return (
    <SearchResultStyles ref={wrapperRef}>
      <h2>Search Results</h2>
      <div className="category-list">
        <h3>Categories</h3>
        <div>
          {categoryResults.length ? (
            categoryResults.map((category) => (
              <h4 key={category.id}>{category.title}</h4>
            ))
          ) : (
            <p className="no-results">No results found</p>
          )}
        </div>
      </div>
      <div className="post-list">
        <h3>Posts</h3>
        {postResults.length ? (
          postResults.map((post) => (
            <PostItemStyles key={post.id}>
              {post.mainImage ? (
                <SanityImage
                  {...post.mainImage}
                  width={300}
                  alt={post.mainImage.alt}
                  className="results-image"
                />
              ) : (
                <PlaceholderImage />
              )}

              <div>
                <div className="post-header">
                  <h4>{post.title}</h4>
                  <div>
                    {post.categories.map((category, index) => {
                      if (index + 1 < post.categories.length) {
                        return (
                          <p key={category.id}>
                            {category.title}
                            <span>&ensp;/&ensp;</span>
                          </p>
                        );
                      } else {
                        return <p key={category.id}>{category.title}</p>;
                      }
                    })}
                  </div>
                </div>
                <p>{post.excerpt}</p>
              </div>
            </PostItemStyles>
          ))
        ) : (
          <p className="no-results">No results found</p>
        )}
      </div>
    </SearchResultStyles>
  );
  // }
};

export default SearchResults;
