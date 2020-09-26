import React from "react";
import styled from "styled-components";
import { Menu } from "semantic-ui-react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import CategoriesTab from "./ItemsTabs/CategoriesTab";
import BrandsTab from "./ItemsTabs/BrandsTab";
import { getBaseUrl } from "../../utils/routesUtils";
import ItemsRouter from "../../routes/ItemsRouter";

const StyledMenu = styled(Menu)`
  position: fixed;
  width: 100%;
  height: 45px;
  z-index: 9;
  align-items: center;
  border: 0 !important;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: column;
`;

const StyledItemsContainer = styled.div`
  display: flex;
  flex-direction: row; 
  vertical-align: middle;
  height: 100%;
`;

const StyledItem = styled.div<{ isActive: boolean }>`
  margin: 0 10px;
  padding: 5px 5px;
  border-bottom: 4px solid ${props => props.isActive ? props.theme.colors.primary.normal : 'transparent'};
  font-size: 110%;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const StyledContent = styled.div`
  padding-top: 45px;
`;

interface ItemsParams {
  tabName: string;
}

const Items: React.FC<RouteComponentProps<ItemsParams>> = ({
  history,
  match: { 
    url, 
    params: {
      tabName
    }
  }
}:RouteComponentProps<ItemsParams> ) => {
  const menuItems: any[] = [
    {
      value: 'categories',
      path: '/categories',
      text: 'Categories',
      render: <CategoriesTab />
    },
    {
      value: 'brands',
      path: '/brands',
      text: 'Brands',
      render: <BrandsTab />
    }
  ];
  return (
    <>
      <StyledMenu>
        <StyledItemsContainer>
          {menuItems.map(item => (
            <StyledItem
              key={item.value}
              isActive={tabName === item.value}
              onClick={() => {
                console.log(url);
                console.log(tabName);
                history.push(`${getBaseUrl(url, tabName) + item.path}`);
              }}
            >
              {item.text}
            </StyledItem>
          ))}
        </StyledItemsContainer>
      </StyledMenu>
      <StyledContent>
        <ItemsRouter/>
      </StyledContent>
    </>
  );
};

export default withRouter(Items);