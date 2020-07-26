import Layout from './../../components/Layout';
import React from 'react';
import useTags from '../../hooks/useTags';
import styled from 'styled-components';
import Icon from './../../components/Icon';
import { Link } from 'react-router-dom';

const TagList = styled.ul`
  background-color: #fff;
  padding-left: 16px;
  
  > .tag {
    font-size: 16px;
    box-shadow: inset 0px -0.5px 0px #BCBBC1;
    > a {
      padding: 16px 0 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > .icon {
        fill: #666;
        width: 16px;
        height: 16px;
        margin-right: 16px;
      }
    }
  }
`;

const Button = styled.button`
  height: 40px;
  padding: 0 16px;
  margin-top: 44 - 16px;
  border: none;
  border-radius: 4px;
  background-color: #f60;
  color: #fff;
  font-size: 18px;
  text-align: center;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

function Tags() {
  const { tags } = useTags();
  return (
    <Layout>
      <TagList>
        {
          tags.map((t) => {
            return (
              <li key={t.id} className="tag">
                <Link to={`/tags/${t.name}`}>
                  <span>{t.name}</span>
                  <Icon name="right"/>
                </Link>
              </li>
            );
          })
        }
      </TagList>
      <Center>
        <Button className="btn-wrapper">
          添加标签
        </Button>
      </Center>
    </Layout>
  )
    ;
}

export default Tags;