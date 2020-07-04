import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  background: #c4c4c4;
  
  > .tabs-item {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    position: relative;
    &.selected {
      &::after{
        width: 100%;
        height: 4px;
        background: #333;
        content: "";
        position: absolute;
        bottom: 0;
      }
    }
  }
`;

const CategorySection = () => {
  return (
    <Wrapper>
      <li className="tabs-item selected">支出</li>
      <li className="tabs-item">收入</li>
    </Wrapper>
  );
};

export {
  CategorySection
};