import React from "react";
import { Card } from "semantic-ui-react";
import styled from "styled-components";
import CategoryCard, { CategoryCardProps } from "../../../components/CategoryCard/CategoryCard";
import frozenFoodImg from "../../../assets/images/frozenfoods.jpg"
import iceCreamImg from "../../../assets/images/icecream.jpg"
import confectionaryImg from "../../../assets/images/confectionary.jpg"
import groceriesImg from "../../../assets/images/groceries.jpg"

const StyledContainer = styled(Card.Group)`
  &&& {
    margin: 15px;
  }

  && .card {
    margin: 10px 0px;
  }

  && .card:first-child {
    margin-top: 0px;
  }

  .card .image {
    height:15vh;
    overflow: hidden;

    img {
      position: relative;
      top: 15vh;
      margin-top: -50%;
    }
  }
`;

const CategoriesTab: React.FC = () => {
  const categories: CategoryCardProps[] = [
    {
      id: 'ice-cream',
      name: 'Ice Cream',
      image: iceCreamImg,
      numBrands: 3
    },
    {
      id: 'frozen-foods',
      name: 'Frozen Foods',
      image: frozenFoodImg,
      numBrands: 5
    },
    {
      id: 'groceries',
      name: 'Groceries',
      image: confectionaryImg,
      numBrands: 8
    },
    {
      id: 'confectionaries',
      name: 'Confectionaries',
      image: groceriesImg,
      numBrands: 7
    }
  ]
  return (
    <StyledContainer itemsPerRow={1}>
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