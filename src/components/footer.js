import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledFooter = styled.footer`
  height: 10em;
  width: 100%;
  padding: 0em 15em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`

const NavigationItem = styled.li`
  margin-left: 20px;

  :first-child{
    margin-left: 0;
  }
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.5em;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`

const Footer = () => (
    <StyledFooter>
      <Logo>
        <StyledLink>LOGO</StyledLink>
      </Logo>
        <StyledUl>
          <NavigationItem>
          <StyledLink to="/">Główna</StyledLink>
          </NavigationItem>
          <NavigationItem>
          <StyledLink to="/about">O nas</StyledLink>
          </NavigationItem>
        </StyledUl>
    </StyledFooter>
  )  


export default Footer;