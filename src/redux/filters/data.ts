import { ItemState } from "../items/data" 
export interface FilterState {
  name?: ItemState['name'];
  brands?: ItemState['brand'][];
  priceFrom?: ItemState['price'];
  priceTo?: ItemState['price'];
  categories?: ItemState['categories'];
}

export interface FiltersState {
  filters: FilterState;
}

export const initialFiltersState: FiltersState = {
  filters: {}
}