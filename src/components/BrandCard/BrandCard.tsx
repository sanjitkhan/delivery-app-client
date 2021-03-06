import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import { BrandState } from "../../redux/brands/data";
import { AppRoutes } from "../../routes/routes";
import { 
  addFilter as addFilterAction,
  clearFilters as clearFiltersAction
} from "../../redux/filters/actions";
import { FiltersActions } from "../../redux/filters/types";
import { connect } from "react-redux";

export interface BrandCardProps extends BrandState, RouteComponentProps, Partial<FiltersActions> {
  width?: number;
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

export const BrandCard: React.FC<BrandCardProps> = ({
  id,
  history,
  width = 100,
  image,
  name,
  numItems,
  isFavourited = false,
  clearFilters,
  addFilter
}:BrandCardProps) => {
  return (
    <StyledCardContainer width={width} onClick={() => {
      clearFilters();
      addFilter({ brands: [id] });
      history.push(AppRoutes.PRODUCTS)
    }}>
      <div className="image-container">
        <img alt={name + ' image'} src={image}/>
      </div>
      <div className="name">{name}</div>
      <div className="items">{numItems} items</div>
      <Icon 
        name={isFavourited ? 'heart':'heart outline'} 
        color={isFavourited ? 'red':'grey'} 
        size="large" 
        onClick={() => {}} 
      />
    </StyledCardContainer>
  );
}

const mapActionToProps: Partial<FiltersActions> = {
  addFilter: addFilterAction,
  clearFilters : clearFiltersAction
};

export default withRouter(connect(
  null,
  mapActionToProps
)(BrandCard));