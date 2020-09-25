import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import { GenericCallBack } from "../../App";

export interface BrandCardProps {
  id?: string;
  width?: number;
  image: string;
  name: string;
  numItems: number;
  isFavourited?: boolean;
  setFavourite?: GenericCallBack;
}

const StyledCardContainer = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  border: 0.5px solid ${props => props.theme.content.border};
  position: relative;
  cursor: pointer;
  padding: 20px 0px;
  text-align: center;
  align-content: center;
  .image-container {
    width: 70%;
    position: relative;
    left: 15%;
    display: flex;
    height: 65%;
    img {
      margin: auto;
      width: 100%;
    }
  }
  .name {
    margin-top: 5px;
    font-size: 110%;
    font-weight: 700;
  }
  .items {
    font-size: 80%;
    font-weight: 400;
  }
  i {
    position: absolute;
    right: 15px;
    bottom: 15px;
    margin-right: 0;
  }
`;

const BrandCard: React.FC<BrandCardProps> = ({
  width = 100,
  image,
  name,
  numItems,
  isFavourited = false,
  setFavourite = (data: any) => {}
}:BrandCardProps) => {
  return (
    <StyledCardContainer width={width}>
      <div className="image-container">
        <img alt={name + ' image'} src={image}/>
      </div>
      <div className="name">{name}</div>
      <div className="items">{numItems} items</div>
      <Icon 
        name={isFavourited ? 'heart':'heart outline'} 
        color={isFavourited ? 'red':'grey'} 
        size="large" 
        onClick={() => setFavourite} 
      />
    </StyledCardContainer>
  );
}

export default BrandCard;