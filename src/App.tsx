import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import Order from './containers/Order/Order';
import Profile from './containers/Profile/Profile';
import Search from './containers/Search/Search';
import ItemsRouter from './routes/ItemsRouter';

export type GenericCallBack = (...args: any[]) => any;

export const StyledRoot = styled.div`
  background-color: ${props => props.theme.background.pageBackground};
  height: 100%;
  width: 100%;
`;

export const StyledDiv = styled.div`
  height: 90%;
  width: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  ::-webkit-scrollbar { /* Chrome, Safari and Opera */
    display: none;
  }
`;

export const App: React.FC = () => {
  return (
    <StyledRoot>
      <StyledDiv>
        <Switch>
          <Route path="/items" component={ItemsRouter} />
          <Route exact path="/">
            <Redirect to="/items" />
          </Route>
          <Route exact path="/search" component={Search} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </StyledDiv>
      <MenuBar />
    </StyledRoot>
  );
}

export default App;
