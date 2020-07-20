import React, { useState } from 'react';
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
      margin-top: 10px;
      border-radius: 12px;
      &.selected {
        background: #ff6600;
        color: #fff;
      }
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

type Props = {
  value: string[];
  onChange: (selected: string[]) => void;
}

const TagsSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const selectedTags = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为：');
    if (tagName === '') {
      alert('标签不能为空');
      return;
    }
    if (tagName) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    // set 数据时需要返回一个新的数据，不要操作原来的数据
    if (index >= 0) {
      // 当前点击的元素是存在于 selectedTags 中
      props.onChange(selectedTags.filter((item) => tag !== item));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };
  const getClass = (tag: string) => {
    return selectedTags.indexOf(tag) !== -1 ? 'selected' : '';
  };
  return (
    <Wrapper>
      <ul className="current">
        {
          tags.map(tag => {
            return (
              <li
                key={tag}
                onClick={() => onToggleTag(tag)}
                className={getClass(tag)}
              >{tag}</li>
            );
          })
        }
      </ul>
      <div className="new">
        <button onClick={onAddTag}>新增标签</button>
      </div>
    </Wrapper>
  );
};

export {
  TagsSection
};