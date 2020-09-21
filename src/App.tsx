import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import DateTime from './containers/DateTime';
import Counter from './containers/Counter';
import NavBar from './components/Navbar';

export type GenericCallBack = (...args: any[]) => any;

export const StyledDiv = styled.div`
  text-align: center;
  background-color: ${props => props.theme.background.pageBackground}
`;

export class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <NavBar/>
        </div>
        <StyledDiv>
          <Switch>
            <Route exact path="/counter">
              <Counter />
            </Route>
            <Route exact path="/">
              <Redirect to="/counter" />
            </Route>
            <Route exact path="/datetime">
              <DateTime />
            </Route>
            <Route path="*">
              <div>not found</div>
            </Route>
          </Switch>
        </StyledDiv>
      </>
    );
  }
}

export default App;
