import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from '../styles/GlobalStyles';
import { useLocalStorageState } from '../utils/useLocalStorageState';
import Nav from './Nav';

const LayoutStyles = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const ContentStyles = styled.main`
  flex: 1;
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
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
