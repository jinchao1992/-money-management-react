import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  padding: 16px;
  background: #fff;
  > .current {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    > li {
      font-size: 14px;
      height: 24px;
      line-height: 24px;
      color: #484848;
      background: #d9d9d9;
      padding: 0 18px;
      margin-right: 24px;
      margin-top: 5px;
      border-radius: 12px;
    }
  }
  > .new {
    margin-top: 16px;
    > button {
      border: none;
      background: none;
      color: #999;
      padding: 0 3px;
      border-bottom: 1px solid #666;
      font-size: 14px;
   }
  }
`;

const TagsSection: React.FC = () => {
  const [tags, setTags] = React.useState(['衣', '食', '住', '行']);

  return (
    <Wrapper>
      <ul className="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <div className="new">
        <button>新增标签</button>
      </div>
    </Wrapper>
  );
};

export {
  TagsSection
};