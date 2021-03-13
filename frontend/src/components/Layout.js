import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
// import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const LayoutStyles = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* background: var(--gradient); */
`;

const ContentStyles = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 3rem;
  margin-top: clamp(2rem, 10vw, 12rem);
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1), 0 4px 2px rgba(0, 0, 0, 0.1),
    0 8px 4px rgba(0, 0, 0, 0.1), 0 16px 8px rgba(0, 0, 0, 0.1),
    0 32px 16px rgba(0, 0, 0, 0.1);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {/* <Typography /> */}
    <LayoutStyles>
      <Nav />
      <ContentStyles>
        {children}
        {/* <Footer /> */}
      </ContentStyles>
    </LayoutStyles>
  </>
);

export default Layout;
