import { useState } from 'react';
import { createId } from '../lib/createId';

const defaultTags = [
  {
    id: createId(),
    name: '衣'
  },
  {
    id: createId(),
    name: '食'
  },
  {
    id: createId(),
    name: '住'
  },
  {
    id: createId(),
    name: '行'
  }
];

const useTags = () => {
  const [tags, setTags] = useState<{
    id: number;
    name: string;
  }[]>(defaultTags);
  const findTag = (id: number) => {
    return tags.filter(t => t.id === id)[0];
  };
  const editTag = (id: number, obj: {
    name: string
  }) => {
    setTags(tags.map(item => {
      return item.id === id ? { id, name: obj.name } : item;
    }));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(item => item.id !== id));
  };
  return {
    tags,
    setTags,
    findTag,
    editTag,
    deleteTag
  };
};

export default useTags;