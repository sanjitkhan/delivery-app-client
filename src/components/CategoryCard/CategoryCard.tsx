import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled-components";
import { BackgroundTheme, CategoryState, TextPosition } from "../../redux/categories/data";
import { AppRoutes } from "../../routes/routes";

export interface CategoryCardProps extends CategoryState, RouteComponentProps {
  width?: number;
  numItems?: number;
}

const StyledCardContainer = styled.div<{ width: number, textPosition: TextPosition, backgroundTheme: BackgroundTheme }>`
  width: ${props => props.width}%;
  position: relative;
  cursor: pointer;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
  }
  > div {
    position: absolute;
    ${props => props.textPosition}: 0;
    padding: 20px;
    font-weight: 500;
    color: ${props => props.backgroundTheme === BackgroundTheme.DARK ? props.theme.content.pageBackground : props.theme.content.text};
  }
  .name {
    top: 0;
    font-size: 26px;
  }
  .items {
    bottom: 0;
    font-size: 20px;
  }
`;

export const CategoryCard: React.FC<CategoryCardProps> = ({
  history,
  width = 100,
  id,
  image,
  name,
  numItems,
  textPosition = TextPosition.LEFT,
  backgroundTheme = BackgroundTheme.LIGHT
}:CategoryCardProps) => {
  return (
    <StyledCardContainer 
      width={width}
      textPosition={textPosition}
      backgroundTheme={backgroundTheme}
      onClick={() => history.push(AppRoutes.PRODUCTS)}
    >
      <img alt={name + ' image'} src={image}/>
      <div className="name">{name}</div>
      <div className="items">{numItems} items</div>
    </StyledCardContainer>
  );
}

export default withRouter(CategoryCard);