import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </nav>

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
      </div>
    </Router>
  );
}

function Money() {
  return <h2>记账</h2>;
}

function Tags() {
  return <h2>标签</h2>;
}

function Statistics() {
  return <h2>统计</h2>;
}

function NoMatch() {
  return (
    <div><h2>地址有误，请检查是否输入正确</h2></div>
  );
}

export default App;