import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import Order from './containers/Order/Order';
import Profile from './containers/Profile/Profile';
import ItemsRouter from './routes/ItemsRouter';
import { AppRoutes } from './routes/routes';
import Products from './containers/Products/Products';

export const StyledRoot = styled.div`
  background-color: ${props => props.theme.content.pageBackground};
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
          <Route path={AppRoutes.ITEMS} component={ItemsRouter} />
          <Route exact path="/">
            <Redirect to={AppRoutes.ITEMS} />
          </Route>
          <Route exact path={AppRoutes.PRODUCTS} component={Products} />
          <Route exact path={AppRoutes.ORDER} component={Order} />
          <Route exact path={AppRoutes.PROFILE} component={Profile} />
        </Switch>
      </StyledDiv>
      <MenuBar />
    </StyledRoot>
  );
}

export default App;
