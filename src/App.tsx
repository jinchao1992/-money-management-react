import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Statistics from './views/Statistics';
import Tags from './views/tags/Page';
import EditTag from './views/tags/EditTag';
import Money from './views/money/Page';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';

const AppWrapper = styled.div`
  max-width: 520px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags">
            <Tags/>
          </Route>
          <Route exact path="/tags/:id">
            <EditTag/>
          </Route>
          <Route exact path="/money">
            <Money/>
          </Route>
          <Route exact path="/statistics">
            <Statistics/>
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>

  );
}

export default App;