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
    font-size: 0.8em;
  }

  .menu-item-content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MenuBar: React.FC = () => {
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
          <div className="menu-item-content-container">
            <Icon name={item.icon} />
            <label>{item.text}</label>
          </div>
        </StyledItemContainer>
      ))}
    </StyledMenu>
  );
}

export default MenuBar;