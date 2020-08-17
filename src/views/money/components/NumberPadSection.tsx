import React, { useState } from 'react';
import Wrapper from './NumberPadSection/Wrapper';
import generateOutput from './NumberPadSection/GenerateOutput';

type Props = {
  value: number;
  onChange: (newValue: number) => void;
  onOK: () => void;
}

const NumberPadSection: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState(props.value.toString());
  const setOutput = (output: string) => {
    let value;
    if (output.length > 16) {
      value = output.slice(0, 16);
    } else if (output.length === 0) {
      value = '0';
    } else {
      value = output;
    }
    _setOutput(value);
    props.onChange(parseFloat(value));
  };

  const handleButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (!text) {return;}
    if (text === 'ok') {
      return;
    }
    if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) !== -1) {
      setOutput(generateOutput(text, output));
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
        <button className="ok" onClick={props.onOK}>OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export {
  NumberPadSection
};