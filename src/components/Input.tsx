import styled from 'styled-components';
import React from 'react';

const Label = styled.label`
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
`;

type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  const { label, children, ...rowData } = props;
  return (
    <Label>
      <span className="name">{label}</span>
      <input {...rowData}/>
    </Label>
  );
};

export default Input;