import { createGlobalStyle } from 'styled-components';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/800.css';

export const GlobalStyles = createGlobalStyle`

  html {
    --black: #212227;
    --white: #EFF7FF;
    --orange: #F4743B;
    --lime: #BEEE62;
    --green: #70AE6E;
    --red: #DF2935;
    --maxWidth: 1200px;
    font-size: 62.5%;

    box-sizing: border-box;
    background: var(--black);
    color: var(--white);
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Open Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.7rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
  }
  button {
    font-family: 'Open Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,  'Helvetica Neue', sans-serif;
  }
  img {
    max-width: 100%;
  }

`;
