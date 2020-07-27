import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import Input from '../../../components/Input';

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

type Props = {
  value: string,
  onChange: (newValue: string) => void;
}

const NotesSection: React.FC<Props> = (props) => {
  const note = props.value;
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input
        label="备注"
        type="text"
        placeholder="在这里输入备注"
        value={note}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export {
  NotesSection
};