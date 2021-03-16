import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';
import { useLocalStorageState } from '../utils/useLocalStorageState';
import Nav from './Nav';

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
  border: colours.orange,
  toggleBg: colours.black,
  toggleIcon: colours.white,
  toggleBorder: 'red',
};

export const lightTheme = {
  bg: colours.white,
  text: colours.black,
  link: colours.orange,
  border: colours.lime,
  toggleBg: colours.white,
  toggleIcon: colours.black,
  toggleBorder: colours.orange,
};

const LayoutStyles = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const ContentStyles = styled.main`
    flex: 1;
    padding: 2rem;
    width: 100%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    margin-top: 70px;

  }
`;

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useLocalStorageState('darkMode', 'dark');
  return (
    <ThemeProvider theme={isDark === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles theme={isDark} />
      <LayoutStyles>
        <Nav isDark={isDark} setIsDark={setIsDark} />
        <ContentStyles>{children}</ContentStyles>
      </LayoutStyles>
    </ThemeProvider>
  );
};

export default Layout;
