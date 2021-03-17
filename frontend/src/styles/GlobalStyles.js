import { createGlobalStyle } from 'styled-components';

export const colours = {
  black: '#212227',
  white: '#EFF7FF',
  orange: '#F4743B',
  lime: '#BEEE62',
  green: '#70AE6E',
};

export const darkTheme = {
  bg: colours.black,
  text: colours.white,
  link: colours.lime,
  linkHighlight: colours.green,
  border: colours.orange,
  dmToggleBg: colours.black,
  dmToggleIcon: colours.white,
  dmToggleBorder: 'red',
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
};

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

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
    font-family: 'Open Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.7rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${(props) => (props.theme === 'dark' ? 'red' : '#F4743B')}
  }
  button {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  input {
    background: none;
    color: var(--white);
    font-size: 1.5rem;
  }
  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  hr {
    border: 0;
    height: 8px;
  }
  img {
    max-width: 100%;
  }
  blockquote {
  background: ${(props) =>
    props.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'};
  border-radius: 10px;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
}
blockquote:before {
  color: ${(props) => (props.theme === 'dark' ? '#ccc' : '#555')};
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
`;
