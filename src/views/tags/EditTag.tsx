import React from 'react';
import {
  useParams
} from 'react-router-dom';
import useTags from 'hooks/useTags';
import Layout from 'components/Layout';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import styled from 'styled-components';

const TopBar = styled.header`
  height: 48px;
  line-height: 48px;
  background-color: #fff;
  font-size: 16px;
  color: #333;
  text-align: center;
  position: relative;

  .icon {
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translate3d(0, -50%, 0);
    width: 16px;
    height: 16px;
  }
`;

const Tag = () => {
  const { findTag } = useTags();
  const { id } = useParams();
  const filterTag = findTag(parseInt(id));
  return (
    <Layout>
      <TopBar>
        <Icon name="left"/>
        <span>编辑标签</span>
      </TopBar>
      <div className="form-item-wrapper">
        <label className="notes">
          <span className="name">备注</span>
          <input type="text" placeholder="在这里输入备注"
          />
        </label>
      </div>
      <div className="btn-wrapper">
        <Button>删除标签</Button>
      </div>
    </Layout>
  )
    ;
};

export default Tag;