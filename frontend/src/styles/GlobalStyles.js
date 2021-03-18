import { createGlobalStyle } from 'styled-components';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/800.css';

export const colours = {
  black: '#212227',
  white: '#EFF7FF',
  orange: '#F4743B',
  lime: '#BEEE62',
  green: '#70AE6E',
  red: '#DF2935',
};

export const darkTheme = {
  bg: colours.black,
  text: colours.white,
  link: colours.red,
  linkHighlight: colours.green,
  border: colours.orange,
  dmToggleBg: colours.black,
  dmToggleIcon: colours.white,
  dmToggleBorder: 'red',
  quoteBg: 'rgba(255, 255, 255, 0.1)',
  quoteMarks: '#ccc',
};

export const lightTheme = {
  bg: colours.white,
  text: colours.black,
  link: colours.orange,
  linkHighlight: colours.lime,
  border: colours.lime,
  dmToggleBg: colours.white,
  dmToggleIcon: colours.black,
  dmToggleBorder: colours.orange,
  quoteBg: 'rgba(0, 0, 0, 0.2)',
  quoteMarks: '#555',
};

export const GlobalStyles = createGlobalStyle`

  html {
    --black: #212227;
    --white: #EFF7FF;
    --orange: #F4743B;
    --lime: #BEEE62;
    --green: #70AE6E;
    --maxWidth: 1200px;
    font-size: 62.5%;

    box-sizing: border-box;
    background: ${(props) => (props.theme === 'dark' ? '#212227' : '#EFF7FF')};
    color: ${(props) => (props.theme === 'dark' ? '#EFF7FF' : '#212227')};
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
