import React from "react";
import styled from "styled-components";
import ItemCard from "../../components/ItemCard/ItemCard";
import { ItemsActions } from "../../redux/items/types";
import { ApplicationState } from "../../redux/types";
import { 
  fetchAllItems as fetchAllItemsAction,
  addItem as addItemAction
 } from "../../redux/items/actions";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { ItemsState } from "../../redux/items/data";

const StyledContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`;

export interface ProductsProps extends ItemsState, Partial<ItemsActions> {}

const Products: React.FC<ProductsProps> = ({
  items,
  addItem,
  fetchAllItems
}: ProductsProps) => {
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
 )(Products);