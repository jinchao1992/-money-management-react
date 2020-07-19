import React, { useRef, useState } from 'react';
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


const NotesSection: React.FC = () => {
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const handleBlur = () => {
    if (refInput.current) {
      setNote(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label className="notes">
        <span className="name">备注</span>
        <input type="text" placeholder="在这里输入备注" defaultValue={note}
               ref={refInput}
               onBlur={handleBlur}/>
      </label>
    </Wrapper>
  );
};

export {
  NotesSection
};