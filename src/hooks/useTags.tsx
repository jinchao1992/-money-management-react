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
  const findIndexTag = (id: number) => {
    return tags.findIndex((item) => {
      return item.id === id;
    });
  };
  const editTag = (id: number, obj: {
    name: string
  }) => {
    const index = findIndexTag(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index, 1, { id, name: obj.name });
    setTags(tagsClone);
  };
  return {
    tags,
    setTags,
    findTag,
    editTag
  };
};

export default useTags;