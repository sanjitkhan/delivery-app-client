import React from "react";
import styled from "styled-components";
import ItemCard from "../../components/ItemCard/ItemCard";
import { ItemsActions } from "../../redux/items/types";
import { ApplicationState } from "../../redux/types";
import { connect } from "react-redux";
import { ItemsState } from "../../redux/items/data";
import { FiltersState } from "../../redux/filters/data";
import { FiltersActions } from "../../redux/filters/types";
import { 
  addFilter as addFilterAction,
  deleteFilter as deleteFilterAction,
  clearFilters as clearFiltersAction
} from "../../redux/filters/actions";

const StyledContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`;

export interface ProductsProps extends ItemsState, FiltersState, Partial<FiltersActions>, Partial<ItemsActions> {}

const Products: React.FC<ProductsProps> = ({
  items,
  filters,
  addFilter,
  deleteFilter,
  clearFilters
}: ProductsProps) => {
  // filter items
  const filteredItems = items.filter(({ name, brand, price, categories }) => {
    if (filters.priceFrom && price < filters.priceFrom) return false;
    if (filters.priceTo && price > filters.priceTo) return false;
    if (filters.brands && !filters.brands.includes(brand)) return false;
    if (filters.name && !name.trim().toLowerCase().includes(filters.name.trim().toLowerCase())) return false;
    if (filters.categories && !filters.categories.some(
      filterCategory => categories.some(itemCategory => itemCategory === filterCategory)
    )) return false;
    return true;
  })
  return (
    <StyledContainer>
      {filteredItems.map(item => (
        <ItemCard
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
): ItemsState | FiltersState {
  const { items, filters } = state;
  return {
    items: items.items,
    filters: filters.filters
  };
}
  
const mapActionToProps: Partial<ItemsActions | FiltersActions> = {
  addFilter: addFilterAction,
  deleteFilter: deleteFilterAction,
  clearFilters: clearFiltersAction
};

export default connect(
  mapStateToProps,
  mapActionToProps
 )(Products);