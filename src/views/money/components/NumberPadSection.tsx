import React, { useState } from 'react';
import Wrapper from './NumberPadSection/Wrapper';
import generateOutput from './NumberPadSection/GenerateOutput';

const NumberPadSection: React.FC = () => {
  const [output, setOutput] = useState<string>('0');
  const handleButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (!text) {return;}
    if (text === 'ok') {
      console.log('ok');
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