import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  text-align: center;
   > ul {
      display: flex;
      > li {
        width: 33.333%;
        padding: 4px 0;
         > a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            > .icon {
              width: 24px;
              height: 24px;
            }
         }
      }
   }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/money">
            <Icon name="money"/>
            记账
          </Link>
        </li>
        <li>
          <Link to="/tags">
            <Icon name="label"/>
            标签
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="statistics"/>
            统计
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;