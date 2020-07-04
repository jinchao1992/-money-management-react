import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 8px 0;
  
  > .notes {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-left: 16px;
     > .name {
      padding-right: 16px;
     }
     > input {
      height: 44px;
      flex-grow: 1;
      border: none;
      background: transparent;
      color: #999;
     }
  }
`;


const NotesSection = () => {
  return (
    <Wrapper>
      <label className="notes">
        <span className="name">备注</span>
        <input type="text" placeholder="在这里输入备注"/>
      </label>
    </Wrapper>
  );
};

export {
  NotesSection
};