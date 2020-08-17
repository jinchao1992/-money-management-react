import { useEffect, useState } from 'react';
import { useUpdate } from './useUpdate';

export interface RecordItem {
  tagIds: number[];
  note: string;
  category: '+' | '-';
  amount: number;
  createdAt: string;
}

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(localStorage.getItem('records') || '[]'));
  }, []);

  useUpdate(() => {
    localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const addRecord = (record: RecordItem) => {
    if (record.amount <= 0) {
      alert('请输入金额');
      return false;
    }
    if (record.tagIds.length === 0) {
      alert('请选择标签');
      return false;
    }
    const newRecord = { ...record, createdAt: (new Date()).toISOString() };
    setRecords([...records, newRecord]);
    return true;
  };
  return {
    records,
    addRecord
  };
};