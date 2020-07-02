import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  text-align: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  background: #fff;
   > ul {
      display: flex;
      > li {
        width: 33.333%;
         > a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 4px 0;
            color: #999;
            > .icon {
              width: 24px;
              height: 24px;
              fill: #999;
            }
            &.selected {
              color: #f60;
              font-weight: bold;
              > .icon {
                fill: #f60;
              }
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
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            <span>记账</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="label"/>
            <span>标签</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            <span>统计</span>
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;