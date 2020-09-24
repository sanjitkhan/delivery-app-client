import React from "react";
import styled from "styled-components";
import { Menu } from "semantic-ui-react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import CategoriesTab from "./ItemsTabs/CategoriesTab";
import BrandsTab from "./ItemsTabs/BrandsTab";
import { getBaseUrl } from "../../routes/routes";

const StyledMenu = styled(Menu)`
  position: fixed;
  width: 100%;
  height: 30px;
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

const StyledItem = styled.div<{ width, isActive }>`
  margin: auto 10px;
  padding: 10px 5px;
  ${props => props.isActive && 
  `border-bottom: 3px solid ${props.theme.colors.primary};`}
`;

const StyledContent = styled.div`
  padding-top: 40px;
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
  
  console.log("url: ", url);
  console.log("tabName: ", tabName);
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
              width={70/menuItems.length}
              isActive={tabName === item.value}
              onClick={() => {
                history.push(`${getBaseUrl(url, tabName) + item.path}`);
              }}
            >
              <label>{item.text}</label>
            </StyledItem>
          ))}
        </StyledItemsContainer>
      </StyledMenu>
      <StyledContent>
        {menuItems.find(item => item.value === tabName).render}
      </StyledContent>
    </>
  );
};

export default withRouter(Items);