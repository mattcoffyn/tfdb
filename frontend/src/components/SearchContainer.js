import { graphql, useStaticQuery } from 'gatsby';
import * as JsSearch from 'js-search';
import React, { useEffect, useRef, useState } from 'react';
import { debounce } from '../utils/debounce';
import SearchResults from './SearchResults';

const SearchContainer = () => {
  const data = useStaticQuery(graphql`
    query GetDataForSearch {
      posts: allSanityPost {
        nodes {
          _type
          id
          title
          categories {
            title
            id
          }
          _rawExcerpt
          publishedAt
          slug {
            current
          }
          authors {
            author {
              name
            }
          }
          mainImage {
            alt
            ...ImageWithPreview
          }
          excerpt {
            children {
              text
            }
          }
          body {
            children {
              text
            }
          }
        }
      }
      categories: allSanityCategory {
        nodes {
          _type
          id
          title
        }
      }
    }
  `);

  const [search, setSearch] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    let refactoredPostList = [];

    data.posts.nodes.map((node) => {
      let fullBodyTextArray = [];
      node.body.map((bodyChild) => {
        if (bodyChild.children[0]) {
          bodyChild.children.map((child) => {
            fullBodyTextArray.push(child.text);
            return null;
          });
        } else {
          return null;
        }
        return null;
      });
      const fullBodyTextString = fullBodyTextArray.join(' ');
      refactoredPostList.push({
        ...node,
        excerpt: node.excerpt[0].children[0].text,
        body: fullBodyTextString,
      });
      return null;
    });
    const searchList = data.categories.nodes.concat(refactoredPostList);
    const dataToSearch = new JsSearch.Search('id');
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex('id');
    dataToSearch.tokenizer = new JsSearch.StopWordsTokenizer(
      new JsSearch.SimpleTokenizer()
    );

    dataToSearch.addIndex('title');
    dataToSearch.addIndex('excerpt');
    dataToSearch.addIndex('body');

    dataToSearch.addDocuments(searchList);
    setSearch(dataToSearch);
    setIsLoading(false);
  }, [data]);

  function startSearch(e) {
    const queryResult = search.search(e.target.value);
    setSearchQuery(e.target.value);
    setSearchResults(queryResult);
    if (e.target.value && e.target.value.length) {
      setIsOpen(true);
    }
    if (e.target.value.length === 0) {
      setIsOpen(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  const queryResults = searchQuery === '' ? [] : searchResults;

  return (
    <div className="search-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            ref={inputRef}
            id="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => debounce(startSearch(e), 350)}
            placeholder="Search..."
          />
        </div>
      </form>
      <div>
        {isOpen && (
          <SearchResults
            setIsOpen={setIsOpen}
            results={queryResults}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isLoading={isLoading}
            inputRef={inputRef}
          />
        )}
      </div>
    </div>
  );
};

export default SearchContainer;
