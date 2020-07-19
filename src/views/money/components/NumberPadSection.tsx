import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
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
const NumberPadSection: React.FC = () => {
  const [output, setOutput] = useState<string>('0');
  const handleButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (!text) {return;}
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case '.':
        if (output.indexOf('.') >= 0) {
          return;
        }
        setOutput(output + text);
        break;
      case '删除':
        if (output.length === 1) {
          setOutput('0');
        } else {
          setOutput(output.slice(0, -1));
        }
        break;
      case '清空':
        setOutput('0');
        break;
      case 'ok':
        console.log(text);
        break;
    }
  };
  return (
    <Wrapper>
      <div className="number">{output}</div>
      <div className="buttons" onClick={handleButtonWrapper}>
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
    </Wrapper>
  );
};

export {
  NumberPadSection
};