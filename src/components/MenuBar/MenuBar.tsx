import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

export const StyledMenu = styled.div`
  position: fixed;
  bottom: 0;
  height: 10%;
  width: 100%;
  display: table;
  padding: 2px;
  border: 1px solid ${props => props.theme.menu.border};
  background-color: ${props => props.theme.menu.optionBackground};
`;

const StyledItemContainer = styled.div<{width: number, isActive: boolean}>`
  display: table-cell;
  width: ${props => props.width}%;
  // text-align: center;
  color: ${props => props.theme.menu.text};
  padding: 2px;
  vertical-align: middle;
  ${props => props.isActive && `background-color: ${props.theme.menu.activeOptionBackground}`};

  &&&& i {
    margin-right: 0;
  }

  label {
    margin-top: 6px;
    font-size: 0.9em;
  }

  .menu-item-content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MenuBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('items');
  const history = useHistory();
  const menuItems: any[] = [
    {
      value: 'items',
      path: '/items',
      icon: 'food',
      text: 'Items'
    },
    {
      value: 'search',
      path: '/search',
      icon: 'search',
      text: 'Search'
    },
    {
      value: 'order',
      path: '/order',
      icon: 'shopping cart',
      text: 'Order'
    },
    {
      value: 'profile',
      path: '/profile',
      icon: 'user',
      text: 'Profile'
    }
  ];
  return (
    <StyledMenu>
      {menuItems.map(item => (
        <StyledItemContainer
          key={item.value}
          width={100/menuItems.length}
          isActive={activeItem === item.value}
          onClick={() => {
            setActiveItem(item.value);
            history.push(item.path)
          }}
        >
          <div className="menu-item-content-container">
            <Icon name={item.icon} size="large" />
            <label>{item.text}</label>
          </div>
        </StyledItemContainer>
      ))}
    </StyledMenu>
  );
}

export default MenuBar;