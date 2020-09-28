import React, { useState } from "react";
import styled from "styled-components";
import ItemCard from "../../components/ItemCard/ItemCard";
import { ApplicationState } from "../../redux/types";
import { connect } from "react-redux";
import { ItemsState } from "../../redux/items/data";
import { FiltersState } from "../../redux/filters/data";
import FiltersPanel from "../../components/FiltersPanel/FiltersPanel";
import { Dimmer } from "semantic-ui-react";
import { isQueryPresentInString } from "../../utils/utils";

const StyledProducts = styled.span`
  .blurring.dimmable>:not(.dimmer) {
    transition: .1s filter ease, .1s -webkit-filter ease;
  }
  &&& .dimmer {
    background-color: rgba(0, 0, 0, 0.8); // use theme
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  ::-webkit-scrollbar { /* Chrome, Safari and Opera */
    display: none;
  }
`;

export interface ProductsProps extends ItemsState, FiltersState {}

const Products: React.FC<ProductsProps> = ({
  items,
  filters
}: ProductsProps) => {
  // filter items
  const filteredItems = items.filter(({ name, brand, price, categories }) => {
    if (filters.priceFrom && price < filters.priceFrom) return false;
    if (filters.priceTo && price > filters.priceTo) return false;
    if (filters.brands && !filters.brands.includes(brand)) return false;
    if (filters.name && !isQueryPresentInString(filters.name, name)) return false;
    if (filters.categories && !filters.categories.some(
      filterCategory => categories.some(itemCategory => itemCategory === filterCategory)
    )) return false;
    return true;
  })
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  return (
    <StyledProducts>
      <FiltersPanel
        isOpen={isFiltersOpen}
        setIsOpen={() => setIsFiltersOpen(!isFiltersOpen)}
      />
      <Dimmer.Dimmable blurring dimmed={isFiltersOpen}>
        <Dimmer active={isFiltersOpen} inverted onClickOutside={() => setIsFiltersOpen(false)} />
        <StyledContainer>
          {filteredItems.map(item => (
            <ItemCard
              key={item.id}
              width={50}
              {...item}
            />
          ))}
        </StyledContainer>
      </Dimmer.Dimmable>
    </StyledProducts>
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
  
export default connect(
  mapStateToProps,
  {}
 )(Products);