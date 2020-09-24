import React from "react";
import { Card } from "semantic-ui-react";
import styled from "styled-components";
import CategoryCard, { CategoryCardProps } from "../../../components/CategoryCard/CategoryCard";
import frozenFoodImg from "../../../assets/images/frozenfoods.jpg"
import iceCreamImg from "../../../assets/images/icecream.jpg"
import confectionaryImg from "../../../assets/images/confectionary.jpg"
import groceriesImg from "../../../assets/images/groceries.jpg"

const StyledContainer = styled.div``;

const CategoriesTab: React.FC = () => {
  const categories: CategoryCardProps[] = [
    {
      id: 'ice-cream',
      name: 'Ice Cream',
      image: iceCreamImg,
      numBrands: 3
    }
  ]
  return (
    <StyledContainer>
      {categories.map(({ id, name, image, numBrands }) => (
        <CategoryCard
          key={id}
          name={name}
          image={image}
          numBrands={numBrands}
        />
      ))}
    </StyledContainer>
  );
}

export default CategoriesTab;