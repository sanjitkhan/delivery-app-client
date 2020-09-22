import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Search } from 'semantic-ui-react';
import MenuBar from './components/MenuBar/MenuBar';
import Order from './containers/Order/Order';
import Cart from './containers/Cart/Cart';
import Profile from './containers/Profile/Profile';

export type GenericCallBack = (...args: any[]) => any;

export const StyledRoot = styled.div`
  background-color: ${props => props.theme.background.pageBackground};
  height: 100%;
  width: 100%;
`;

export const StyledDiv = styled.div`
  height: 92%;
  width: 100%;
`;

export const App: React.FC = () => {
  return (
    <StyledRoot>
      <StyledDiv>
        <Switch>
          <Route exact path="/order">
            <Order/>
          </Route>
          <Route exact path="/">
            <Redirect to="/order" />
          </Route>
          <Route exact path="/search">
            <Search/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
        </Switch>
      </StyledDiv>
      <MenuBar />
    </StyledRoot>
  );
}

export default App;
