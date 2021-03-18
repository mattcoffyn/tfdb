import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FeedItem from './FeedItem';
import { globalHistory } from '@reach/router';

const SearchResultStyles = styled.div`
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 275px;
  width: 100%;
  max-width: var(--maxWidth);
  transform: translate(-50%, 0%);
  background: var(--black);
  border: 5px solid var(--white);
  border-bottom: 10px solid var(--white);
  padding: 2rem;
  .title {
    font-size: 5rem;
    text-align: center;
    margin: 0;
  }
  .subtitle {
    font-size: 4rem;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }

  .no-results {
    text-transform: none;
    color: rgba(255, 255, 255, 0.6);
  }
  .post-list {
    text-transform: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .category-list {
    border-bottom: 1px solid var(--white);
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

const SearchResults = ({ setIsOpen, results, isLoading, inputRef }) => {
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

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') setIsOpen(false);
    });
  }, [setIsOpen]);

  if (isLoading) {
    return (
      <SearchResultStyles>
        <p>Loading...</p>
      </SearchResultStyles>
    );
  }
  return (
    <SearchResultStyles ref={wrapperRef}>
      <h2 className="title">Search Results</h2>
      <div className="category-list">
        <h3 className="subtitle">Categories</h3>
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
        <h3 className="subtitle">Posts</h3>
        {postResults.length ? (
          postResults.map((post) => <FeedItem post={post} />)
        ) : (
          <p className="no-results">No results found</p>
        )}
      </div>
    </SearchResultStyles>
  );
  // }
};

export default SearchResults;
