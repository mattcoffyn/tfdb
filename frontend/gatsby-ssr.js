import React from 'react';
import { GlobalStyle } from './src/styles/GlobalStyles';

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);
