import React from 'react';
import {
  useParams
} from 'react-router-dom';
import useTags from '../../hooks/useTags';

const Tag = () => {
  const { findTag } = useTags();
  const { id } = useParams();
  const filterTag = findTag(parseInt(id));
  return (
    <div>
      {filterTag.name}
    </div>
  );
};

export default Tag;