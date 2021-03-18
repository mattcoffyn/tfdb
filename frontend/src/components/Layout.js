import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';
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
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        htmlAttributes=
        {{
          lang: 'en',
        }}
      </Helmet>
      <GlobalStyles />
      <LayoutStyles>
        <Nav />
        <ContentStyles>{children}</ContentStyles>
      </LayoutStyles>
    </>
  );
};

export default Layout;
