import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.nav`
  text-align: center;
   > ul {
      display: flex;
      > li {
        width: 33.333%;
        padding: 16px 0;
      }
   }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;