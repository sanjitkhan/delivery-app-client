import { Brand, initialBrandsState } from '../../redux/brands/data';
import { Category, initialCategoriesState } from '../../redux/categories/data';
import { addStoryBookElementMeta, addStoryBookElementTemplate } from '../../utils/storybookUtils';
import { FiltersPanel } from './FiltersPanel';

const data: any = {
  isOpen: true,
  setIsOpen: () => {},
  brands: initialBrandsState.brands,
  categories: initialCategoriesState.categories,
  filters: {
    name: 'some text',
    brands: [Brand.MC_CAIN, Brand.KWALITY_WALLS],
    categories: [Category.CONFECTIONERY, Category.FROZEN_FOOD],
    priceFrom: 100,
    priceTo: 500
  }
};

export default addStoryBookElementMeta('Filters/Fitler Panel', FiltersPanel);
export const Some_filters_selected = addStoryBookElementTemplate(data, FiltersPanel);
export const No_filter_selected = addStoryBookElementTemplate({
  ...data,
  filters: {}
}, FiltersPanel);
export const Closed_filters_bar = addStoryBookElementTemplate({
  ...data,
  isOpen: false
}, FiltersPanel);