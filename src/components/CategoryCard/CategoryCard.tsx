import React from "react";
import styled from "styled-components";

export enum positionEnum {
  RIGHT = 'right',
  LEFT = 'left'
}

export enum backgroundThemeEnum {
  DARK = 'dark',
  LIGHT = 'light'
}

export interface CategoryCardProps {
  id?: string;
  width?: number;
  image: string;
  name: string;
  numBrands: number;
  textPosition?: positionEnum;
  backgroundTheme?: backgroundThemeEnum;
}

const StyledCardContainer = styled.div<{ width: number, textPosition: positionEnum, backgroundTheme: backgroundThemeEnum }>`
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
    color: ${props => props.backgroundTheme === backgroundThemeEnum.DARK ? props.theme.content.pageBackground : props.theme.content.text};
  }
  .name {
    top: 0;
    font-size: 26px;
  }
  .brands {
    bottom: 0;
    font-size: 20px;
  }
`;

const CategoryCard: React.FC<CategoryCardProps> = ({
  width = 100,
  image,
  name,
  numBrands,
  textPosition = positionEnum.LEFT,
  backgroundTheme = backgroundThemeEnum.LIGHT
}:CategoryCardProps) => {
  return (
    <StyledCardContainer width={width} textPosition={textPosition} backgroundTheme={backgroundTheme}>
      <img alt={name + ' image'} src={image}/>
      <div className="name">{name}</div>
      <div className="brands">{numBrands} brands</div>
    </StyledCardContainer>
  );
}

export default CategoryCard;