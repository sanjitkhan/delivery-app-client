import React from "react";
import { connect } from "react-redux";
import { Button, Icon, Label } from "semantic-ui-react";
import styled from "styled-components";
import { BrandsState } from "../../redux/brands/data";
import { ItemState } from "../../redux/items/data";
import { ApplicationState } from "../../redux/types";
import { getBrandName } from "../../utils/utils";

export interface ItemCardProps extends ItemState, BrandsState {
  width?: number;
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
      top: 15px;
      width: 80%;
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
    padding-left: 0;
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
      font-weight: 500;
      font-size: 80%;
      font-variant-caps: all-small-caps;
      letter-spacing: 0.3px;
    }
    .stock {
      color: ${props => props.theme.content.text.light};
      font-size: 90%;
      margin-top: 5px;
    }
    .price {
      font-weight: 900;
      margin-top: 10px;
    }
  }
`;

export const ItemCard: React.FC<ItemCardProps> = ({
  width = 100,
  image,
  name,
  brand,
  stock,
  isFavourited,
  price,
  brands
}:ItemCardProps) => {
  return (
    <StyledCardContainer width={width}>
      <div className="image-container">
        <div><img alt={name + ' image'} src={image}/></div>
      </div>
      <div className="details-container">
        <div className="brand">{getBrandName(brands, brand)}</div>
        <div className="name">{name}</div>
        {/* <div className="stock">Available in stock: {stock}</div> */}
        <div className="price">Rs. {price}</div>
        <Icon
          name={isFavourited ? 'heart':'heart outline'} 
          color={isFavourited ? 'red':'grey'} 
          size="large" 
          onClick={() => {}} 
        />
        <div className="add-button-container">
          {stock === 0 ? <Button>Add</Button> :
            <Label>
              <Label.Detail>-</Label.Detail>
              <Label.Detail>{stock}</Label.Detail>
              <Label.Detail>+</Label.Detail>
            </Label>
          }
        </div>
      </div>
    </StyledCardContainer>
  );
}

function mapStateToProps(
  state: ApplicationState
): BrandsState {
  const { brands } = state;
  return {
    brands: brands.brands
  };
}

export default connect(
  mapStateToProps,
  {}
 )(ItemCard);