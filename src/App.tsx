import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Route path="/" component={Money} exact/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计</h2>
    </Layout>
  );
}

function NoMatch() {
  return (
    <div><h2>地址有误，请检查是否输入正确</h2></div>
  );
}

export default App;