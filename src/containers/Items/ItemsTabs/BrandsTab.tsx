import React from "react";
import BrandCard, { BrandCardProps } from "../../../components/BrandCard/BrandCard";
import kwalitywallsImg from "../../../assets/images/brand_kwalitywalls.png"
import britanniaImg from "../../../assets/images/brand_britannia.png"
import godrejImg from "../../../assets/images/brand_godrej.png"
import mccainImg from "../../../assets/images/brand_mccain.png"
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const BrandsTab: React.FC = () => {
  const brands: Omit<BrandCardProps, 'width'>[] = [
    {
      id: 'kwalitywalls',
      name: 'Kwality Walls',
      image: kwalitywallsImg,
      numItems: 3
    },
    {
      id: 'godrej',
      name: 'Godrej',
      image: godrejImg,
      numItems: 8
    },
    {
      id: 'mccain',
      name: 'McCain',
      image: mccainImg,
      numItems: 5
    },
    {
      id: 'britannia',
      name: 'Britannia',
      image: britanniaImg,
      numItems: 7
    }
  ]
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

export default BrandsTab;