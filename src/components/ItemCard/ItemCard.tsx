import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import styled from "styled-components";
import { GenericCallBack } from "../../App";

export interface ItemCardProps {
  id?: string;
  width?: number;
  image: string;
  name: string;
  brand: string;
  numItems: number;
  isFavourited?: boolean;
  setFavourite?: GenericCallBack;
  price: number;
}

const StyledCardContainer = styled.div<{ width: number }>`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.content.border};
  display: flex;
  flex-direction: row;
  .image-container {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    > div {
      position: relative;
      top: 10px;
      width: 90%;
      height: 160px;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      box-shadow: 0 1px 4px ${props => props.theme.content.border}, 0 0 4px ${props => props.theme.content.border};
      border-radius: 4px;
      img {
        height: 100%;
        width: auto;
      }
    }
  }
  .details-container {
    width: 60%;
    padding: 10px;
    position: relative;
    i {
      position: absolute;
      top: 0;
      right: 0;
      margin: 20px;
    }
    .add-button-container {
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 0;
      padding: 20px;
      .label {
        float: right;
        font-size: 1.2rem;
        padding: 0;
        .detail {
          padding: 10px 15px;
          margin: 0;
        }
        .detail:nth-child(2n) {
          font-size: 1rem;
          border: 1px solid ${props => props.theme.colors.primary.normal};
        }
        .detail:nth-child(2n+1) {
          background-color: ${props => props.theme.colors.primary.normal};
          color: ${props => props.theme.colors.grey.white};
        }
      }
      button {
        background-color: ${props => props.theme.colors.primary.normal};
        color: ${props => props.theme.colors.grey.white};
        font-weight: 100;
      }
    }
    .name {
      font-size: 120%;
      padding-right: 40px;
    }
    .brand {
      color: ${props => props.theme.content.text.light};
      font-weight: 300;
      font-size: 80%;
    }
    .stock {
      color: ${props => props.theme.content.text.light};
      font-size: 90%;
      margin-top: 5px;
    }
  }
`;

const ItemCard: React.FC<ItemCardProps> = ({
  width = 100,
  image,
  name,
  brand,
  numItems,
  isFavourited = false,
  price,
  setFavourite = (data: any) => {}
}:ItemCardProps) => {
  return (
    <StyledCardContainer width={width}>
      <div className="image-container">
        <div><img alt={name + ' image'} src={image}/></div>
      </div>
      <div className="details-container">
        <div className="brand">{brand}</div>
        <div className="name">{name}</div>
        <div className="stock">Available in stock: {numItems}</div>
        <div className="price">Rs. {price}</div>
        <Icon
          name={isFavourited ? 'heart':'heart outline'} 
          color={isFavourited ? 'red':'grey'} 
          size="large" 
          onClick={() => setFavourite} 
        />
        <div className="add-button-container">
          {numItems === 0 ? <Button>Add</Button> :
            <Label>
              <Label.Detail>-</Label.Detail>
              <Label.Detail>{numItems}</Label.Detail>
              <Label.Detail>+</Label.Detail>
            </Label>
          }
        </div>
      </div>
    </StyledCardContainer>
  );
}

export default ItemCard;