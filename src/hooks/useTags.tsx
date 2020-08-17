import { useEffect, useState } from 'react';
import { createId } from '../lib/createId';
import { useUpdate } from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{
    id: number;
    name: string;
  }[]>([]); // useState 的值会默认从 undefined 变为你的初始值

  useEffect(() => {
    let localTag = JSON.parse(localStorage.getItem('tags') || '[]');
    if (localTag.length === 0) {
      localTag = [
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
    }
    setTags(localTag);
  }, []);

  useUpdate(() => {
    localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);

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
  const addTag = () => {
    const tagName = window.prompt('新标签的名称为：');
    if (tagName === '') {
      alert('标签不能为空');
      return;
    }
    if (tagName) {
      setTags([...tags, {
        id: createId(),
        name: tagName
      }]);
    }
  };
  const getName = (id: number) => {
    const tag = tags.filter((tag) => tag.id === id)[0];
    return tag ? tag.name : '';
  };
  return {
    tags,
    addTag,
    setTags,
    findTag,
    editTag,
    deleteTag,
    getName
  };
};

export default useTags;