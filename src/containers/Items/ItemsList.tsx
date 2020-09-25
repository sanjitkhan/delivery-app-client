import React from "react";
import styled from "styled-components";
import ItemCard from "../../components/ItemCard/ItemCard";
// import kwalitywallsImg from "../../assets/images/brand_kwalitywalls.png"
// import britanniaImg from "../../assets/images/brand_britannia.png"
// import godrejImg from "../../assets/images/brand_godrej.png"
// import mccainImg from "../../assets/images/brand_mccain.png"
import { ItemsActions, ItemsState } from "../../redux/items/types";
import { ApplicationState } from "../../redux/types";
import { 
  fetchAllItems as fetchAllItemsAction,
  addItem as addItemAction
 } from "../../redux/items/actions";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

const StyledContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`;

interface ItemsListProps extends ItemsState, Partial<ItemsActions> {}

const ItemsList: React.FC<ItemsListProps> = ({
  items,
  addItem,
  fetchAllItems
}: ItemsListProps) => {
  // const items: Omit<ItemCardProps, 'width'>[] = [
  //   {
  //     id: 'kwalitywallsitem1',
  //     name: 'Item 1',
  //     brand: 'Kwality Walls',
  //     image: kwalitywallsImg,
  //     numItems: 333,
  //     price: 100.00
  //   },
  //   {
  //     id: 'godrejitem1',
  //     name: 'item 2 item 2 item 2 item 2 item 2',
  //     brand: 'Godrej',
  //     image: godrejImg,
  //     numItems: 8,
  //     price: 100.00
  //   },
  //   {
  //     id: 'mccainitem1',
  //     name: 'item 3',
  //     brand: 'McCain',
  //     image: mccainImg,
  //     numItems: 5,
  //     price: 100.00
  //   },
  //   {
  //     id: 'britanniaitem1',
  //     name: 'item 4',
  //     brand: 'Britannia',
  //     image: britanniaImg,
  //     numItems: 7,
  //     price: 100.00
  //   }
  // ]
  return (
    <StyledContainer>
      {items.map(item => (
        <ItemCard
          key={item.id}
          width={50}
          {...item}
        />
      ))}
      <Button onClick={addItem}>Fetch one</Button>
      <Button onClick={fetchAllItems}>Fetch all</Button>
    </StyledContainer>
  );
}

function mapStateToProps(
  state: ApplicationState
): ItemsState {
  const { items } = state;
  return {
    items: items.items
  };
}
  
const mapActionToProps: Partial<ItemsActions> = {
  addItem: addItemAction,
  fetchAllItems: fetchAllItemsAction
};

export default connect(
  mapStateToProps,
  mapActionToProps
 )(ItemsList);