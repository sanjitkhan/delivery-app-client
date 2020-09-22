import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import DateTime from './containers/DateTime';
import Counter from './containers/Counter';
import { Segment, Icon, Grid } from 'semantic-ui-react';

export type GenericCallBack = (...args: any[]) => any;

export const StyledRoot = styled.div`
  background-color: ${props => props.theme.background.pageBackground};
  height: 100%;
`;

export const StyledMenu = styled.div`
  position: fixed;
  bottom: 0;
  height: 8%;
  width: 100%;
  display: table;
  padding: 5px;
  border: 1px solid ${props => props.theme.menu.border};
  background-color: ${props => props.theme.menu.optionBackground};
`;

const StyledItemContainer = styled.div<{width: number, isActive: boolean}>`
  display: table-cell;
  width: ${props => props.width}%;
  text-align: center;
  color: ${props => props.theme.menu.text};
  padding: 20px;
  vertical-align: middle;
  ${props => props.isActive && `background-color: ${props.theme.menu.activeOptionBackground}`};

  &&&& i {
    margin-right: 0;
  }

  label {
    margin-top: 15px;
    font-size: 2.5em;
  }
`;

export const StyledSegment = styled(Segment)`
  height: 92%;
`;

export const App: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('order');
  const history = useHistory();
  const menuItems: any[] = [
    {
      value: 'order',
      path: '/order',
      icon: 'food',
      text: 'Order'
    },
    {
      value: 'search',
      path: '/search',
      icon: 'search',
      text: 'Search'
    },
    {
      value: 'cart',
      path: '/cart',
      icon: 'shopping cart',
      text: 'Cart'
    },
    {
      value: 'profile',
      path: '/profile',
      icon: 'user',
      text: 'Profile'
    }
  ];
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
      <StyledMenu>
        {menuItems.map(item => (
          <StyledItemContainer
            width={100/menuItems.length}
            isActive={activeItem === item.value}
            onClick={() => {
              setActiveItem(item.value);
              history.push(item.path)
            }}
          >
            <Grid stackable columns={1}>
              <Grid.Column>
                <Icon name={item.icon} size="huge" />
              </Grid.Column>
              <Grid.Column>
                <label>{item.text}</label>
              </Grid.Column>
            </Grid>
          </StyledItemContainer>
        ))}
      </StyledMenu>
    </StyledRoot>
  );
}

export default App;
