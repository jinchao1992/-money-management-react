import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const TagsSection = styled.section`
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

const NotesSection = styled.section`
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

const TypeSection = styled.ul`
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

const NumberPadSection = styled.section`
  > .number {
    background: #fff;
    font-size: 36px;
    color: #333;
    text-align: right;
    padding: 9px 16px;
    height: 72px;
    box-shadow: inset 0px -5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  > .buttons {
    overflow: hidden;
    > button {
      float: left;
      width: 25%;
      height: 64px;
      font-size: 18px;
      border: none;
      background: transparent;
      &.zero {
        width: 50%;
      }
      &.ok {
        height: 128px;
        float: right;
      }
      &:nth-child(1) {
        background: #F2F2F2;
      }
      &:nth-child(2), &:nth-child(5) {
        background: #e8e8e8;
      }
      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: #dedede;
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: #e0e0e0;
      }
      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: #c9c9c9;
      }
      &:nth-child(12) {
        background: #b5b5b5;
      }
      &:nth-child(14) {
        background: #bfbfbf;
      }
    }
  }
`;

function Money() {
  return (
    <MyLayout>
      <TagsSection>
        <ul className="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <div className="new">
          <button>新增标签</button>
        </div>
      </TagsSection>
      <NotesSection>
        <label className="notes">
          <span className="name">备注</span>
          <input type="text" placeholder="在这里输入备注"/>
        </label>
      </NotesSection>
      <TypeSection>
        <li className="tabs-item selected">支出</li>
        <li className="tabs-item">收入</li>
      </TypeSection>
      <NumberPadSection>
        <div className="number">100</div>
        <div className="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;