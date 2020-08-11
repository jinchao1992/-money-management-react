import React from 'react';
import {
  useParams,
  useHistory
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

const NotDiv = styled.div`
  font-size: 20px;
  color: #f60;
  text-align: center;
  line-height: 100px;
`;

const Tag = () => {
  const { findTag, editTag, deleteTag } = useTags();
  const { id } = useParams();
  const tag = findTag(parseInt(id));

  function handleChange(e: any) {
    editTag(tag.id, {
      name: e.target.value
    });
  }

  function onRemove() {
    if (window.confirm('确定删除改标签吗？')) {
      deleteTag(tag.id);
    }
  }

  function tagContent(tag: {
    id: number;
    name: string
  }) {
    return (
      <>
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
          <Button onClick={onRemove}>删除标签</Button>
        </Center>
      </>
    );
  }

  const history = useHistory();
  return (
    <Layout>
      <TopBar>
        <Icon name="left" onClick={() => {
          history.goBack();
        }}/>
        <span>编辑标签</span>
      </TopBar>
      {
        tag ? tagContent(tag) : (
          <NotDiv>该标签不存在</NotDiv>
        )
      }

    </Layout>
  )
    ;
};

export default Tag;