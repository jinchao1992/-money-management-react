import React from 'react';
import {
  useParams
} from 'react-router-dom';
import useTags from 'hooks/useTags';
import Layout from 'components/Layout';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import styled from 'styled-components';
import Input from '../../components/Input';

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

const InputWrapper = styled.div`
  background: #fff;
  margin-top: 8px;
`;

const Center = styled.div`
  text-align: center;
  padding-top: 16px;
  margin-top: 44px;
`;

const Tag = () => {
  const { findTag } = useTags();
  const { id } = useParams();
  const tag = findTag(parseInt(id));

  function handleChange() {
    console.log('123');
  }

  return (
    <Layout>
      <TopBar>
        <Icon name="left"/>
        <span>编辑标签</span>
      </TopBar>
      <InputWrapper>
        <Input
          label="标签名"
          type="text"
          placeholder="在这里输入标签名"
          value={tag.name}
          onChange={handleChange}
        />
      </InputWrapper>
      <Center>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  )
    ;
};

export default Tag;