import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import DateTime from './containers/DateTime';
import Counter from './containers/Counter';
import { Segment } from 'semantic-ui-react';
import MenuBar from './components/MenuBar/MenuBar';

export type GenericCallBack = (...args: any[]) => any;

export const StyledRoot = styled.div`
  background-color: ${props => props.theme.background.pageBackground};
  height: 100%;
`;

export const StyledSegment = styled(Segment)`
  height: 92%;
`;

export const App: React.FC = () => {
  return (
    <StyledRoot>
      <StyledSegment attached='top'>
        <Switch>
          <Route exact path="/counter">
            <Counter/>
          </Route>
          <Route exact path="/">
            <Redirect to="/counter" />
          </Route>
          <Route exact path="/datetime">
            <DateTime/>
          </Route>
        </Switch>
      </StyledSegment>
      <MenuBar />
    </StyledRoot>
  );
}

export default App;
