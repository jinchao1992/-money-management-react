import React, { useState } from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import { TagsSection } from './components/TagsSection';
import { NotesSection } from './components/NotesSection';
import { CategorySection } from './components/CategorySection';
import { NumberPadSection } from './components/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+';
function Money() {
  const [record, setRecord] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  return (
    <MyLayout>
      <TagsSection value={record.tags} onChange={(array) => setRecord({
        ...record,
        tags: array
      })}/>
      <NotesSection value={record.note} onChange={(value) => setRecord({
        ...record,
        note: value
      })}/>
      <CategorySection value={record.category} onChange={(value) => setRecord({
        ...record,
        category: value
      })}/>
      <NumberPadSection value={record.amount} onChange={(value) => setRecord({
        ...record,
        amount: value
      })}/>
    </MyLayout>
  );
}

export default Money;