import React, { useState } from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import { TagsSection } from './components/TagsSection';
import { NotesSection } from './components/NotesSection';
import { CategorySection } from './components/CategorySection';
import { NumberPadSection } from './components/NumberPadSection';
import { useRecords } from '../../hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+';

const defaultValue = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

function Money() {
  const [record, setRecord] = useState(defaultValue);
  const { records, addRecord } = useRecords();
  const onChange = (obj: Partial<typeof record>) => {
    setRecord({
      ...record,
      ...obj
    });
  };

  const onSubmit = () => {
    if (addRecord(record)) {
      alert('保存成功！');
      setRecord({
        ...defaultValue,
      });
    }
  };

  return (
    <MyLayout>
      <TagsSection value={record.tagIds} onChange={(tagIds) => {
        onChange({
          tagIds
        });
      }}/>
      <NotesSection value={record.note} onChange={(note) => {
        onChange({
          note
        });
      }}/>
      <CategorySection value={record.category} onChange={(category) => {
        onChange({
          category
        });
      }}/>
      <NumberPadSection value={record.amount} onChange={(amount) => {
        onChange({
          amount
        });
      }} onOK={onSubmit}/>
    </MyLayout>
  );
}

export default Money;