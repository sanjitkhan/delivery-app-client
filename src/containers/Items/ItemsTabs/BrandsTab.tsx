import React from "react";
import BrandCard from "../../../components/BrandCard/BrandCard";
import styled from "styled-components";
import { 
  fetchAllBrands as fetchAllBrandsAction,
  addBrand as addBrandAction
 } from "../../../redux/brands/actions";
import { connect } from "react-redux";
import { BrandsState } from "../../../redux/brands/data";
import { BrandsActions } from "../../../redux/brands/types";
import { ApplicationState } from "../../../redux/types";

interface BrandsTabProps extends BrandsState, Partial<BrandsActions> {}

const StyledContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const BrandsTab: React.FC<BrandsTabProps> = ({
  brands
}:BrandsTabProps) => {
  return (
    <StyledContainer>
      {brands.map(item => (
        <BrandCard
          key={item.id}
          width={50}
          {...item}
        />
      ))}
    </StyledContainer>
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
  
const mapActionToProps: Partial<BrandsActions> = {
  addBrand: addBrandAction,
  fetchAllBrands: fetchAllBrandsAction
};

export default connect(
  mapStateToProps,
  mapActionToProps
 )(BrandsTab);