import React from 'react';
import styled from 'styled-components';
import useTags from '../../../hooks/useTags';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;
  flex: 1;
  overflow: auto;
  padding: 16px;
  background: #fff;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
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
      cursor: pointer;
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
  value: number[];
  onChange: (selected: number[]) => void;
}

const TagsSection: React.FC<Props> = (props) => {
  const { tags, addTag } = useTags();
  const selectedTagIds = props.value;
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    // set 数据时需要返回一个新的数据，不要操作原来的数据
    if (index >= 0) {
      // 当前点击的元素是存在于 selectedTags 中
      props.onChange(selectedTagIds.filter((item) => tagId !== item));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => {
    return selectedTagIds.indexOf(tagId) !== -1 ? 'selected' : '';
  };
  return (
    <Wrapper>
      <ul className="current">
        {
          tags.map(tag => {
            return (
              <li
                key={tag.id}
                onClick={() => onToggleTag(tag.id)}
                className={getClass(tag.id)}
              >{tag.name}</li>
            );
          })
        }
      </ul>
      <div className="new">
        <button onClick={addTag}>新增标签</button>
      </div>
    </Wrapper>
  );
};

export {
  TagsSection
};