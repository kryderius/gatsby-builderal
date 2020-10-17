import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;800&display=swap');
  *,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans";
  }
`;





const Layout = ({children}) => (
    <>
        <GlobalStyle/>
            {children}
    </>
);

export default Layout;