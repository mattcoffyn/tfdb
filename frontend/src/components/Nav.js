import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 10;
  background: red;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0;
    height: 100%;
    max-width: 1000px;
    list-style: none;
    text-align: center;
    li {
      margin: 0;
    }
  }
`;

const Nav = () => {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <p>People</p>
        </li>
        <li>
          <Link to="/films">Films</Link>
        </li>
        <li>
          <p>News</p>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
