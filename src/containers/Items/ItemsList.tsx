import React from "react";
import styled from "styled-components";
import ItemCard, { ItemCardProps } from "../../components/ItemCard/ItemCard";
import kwalitywallsImg from "../../assets/images/brand_kwalitywalls.png"
import britanniaImg from "../../assets/images/brand_britannia.png"
import godrejImg from "../../assets/images/brand_godrej.png"
import mccainImg from "../../assets/images/brand_mccain.png"

const StyledContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const ItemsList: React.FC = () => {
  const items: Omit<ItemCardProps, 'width'>[] = [
    {
      id: 'kwalitywallsitem1',
      name: 'Item 1',
      brand: 'Kwality Walls',
      image: kwalitywallsImg,
      numItems: 333,
      price: 100.00
    },
    {
      id: 'godrejitem1',
      name: 'item 2 item 2 item 2 item 2 item 2',
      brand: 'Godrej',
      image: godrejImg,
      numItems: 8,
      price: 100.00
    },
    {
      id: 'mccainitem1',
      name: 'item 3',
      brand: 'McCain',
      image: mccainImg,
      numItems: 5,
      price: 100.00
    },
    {
      id: 'britanniaitem1',
      name: 'item 4',
      brand: 'Britannia',
      image: britanniaImg,
      numItems: 7,
      price: 100.00
    }
  ]
  return (
    <StyledContainer>
      {items.map(item => (
        <ItemCard
          key={item.id}
          width={50}
          {...item}
        />
      ))}
    </StyledContainer>
  );
}

export default ItemsList;