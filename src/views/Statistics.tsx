import Layout from '../components/Layout';
import React, { useState } from 'react';
import { CategorySection } from './money/components/CategorySection';
import styled from 'styled-components';
import { RecordItem, useRecords } from '../hooks/useRecords';
import useTags from '../hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.div`
  background-color: white;
`;

const Item = styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const Header = styled.h3`
  font-size: 18px;
  font-weight: normal;
  line-height: 20px;
  padding: 10px 16px;
  background-color: #E5E5E5;
  display:flex;
  justify-content: space-between;
`;

function Statistics() {
  const [category, setCategory] = useState('-');
  const { records } = useRecords();
  const { getName } = useTags();
  const hash: { [K: string]: RecordItem[] } = {};
  const selectedRecords = records.filter((r) => r.category === category);

  selectedRecords.forEach((r) => {
    const key = day(r.createdAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) {
      return 0;
    }
    if (a[0] > b[0]) {
      return -1;
    }
    if (a[0] < b[0]) {
      return 1;
    }
    return 0;
  });

  const sum = (array: RecordItem[]) => {
    return array.reduce((sum, item) => {
      return sum + item.amount;
    }, 0);
  };

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={(category) => setCategory(category)}/>
        {
          array.map(([date, records], index) => {
            return (
              <div key={index}>
                <Header>
                  {date}
                  <span>
                    ￥{sum(records)}
                  </span>
                </Header>
                {
                  records.map((r, index) => {
                    return (
                      <Item key={index}>
                        <div className="tags">
                          {
                            r.tagIds.map((tag) => {
                              return (
                                <span key={tag}>{getName(tag)} </span>
                              );
                            })
                          }
                        </div>
                        {r.note && <div className="note">
                          {r.note}
                        </div>}
                        <div className="amount">
                          ￥{r.amount}
                        </div>
                      </Item>
                    );
                  })
                }
              </div>
            );
          })
        }
      </CategoryWrapper>
    </Layout>
  );
}

export default Statistics;