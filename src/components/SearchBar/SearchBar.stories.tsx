import { initialBrandsState } from '../../redux/brands/data';
import { initialCategoriesState } from '../../redux/categories/data';
import { initialItemsState } from '../../redux/items/data';
import { addStoryBookElementMeta, addStoryBookElementTemplate } from '../../utils/storybookUtils';
import { SearchBar } from './SearchBar';

const data: any = {
  items: initialItemsState.items,
  brands: initialBrandsState.brands,
  categories: initialCategoriesState.categories,
  filters: {}
};

export default addStoryBookElementMeta('Filters/Search Bar', SearchBar);
export const Search_bar = addStoryBookElementTemplate(data, SearchBar);