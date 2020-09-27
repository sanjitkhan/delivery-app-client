import { ItemCard, ItemCardProps } from './ItemCard';
import iceCreamImg from "../../assets/images/brand_kwalitywalls.png"
import { addStoryBookElementMeta, addStoryBookElementTemplate } from '../../utils/storybookUtils';
import { Brand } from '../../redux/brands/data';
import { Category } from '../../redux/categories/data';

const data: Omit<ItemCardProps, 'location' | 'match' | 'history'> = {
  id: Category.ICE_CREAM,
  width: 20,
  image: iceCreamImg,
  name: "Item 1",
  brand: Brand.KWALITY_WALLS,
  categories: [Category.ICE_CREAM],
  stock: 8,
  price: 50.00,
  isFavourited: false,
  brands: [
    {
      id: Brand.KWALITY_WALLS,
      name: 'Kwality Walls',
      image: '',
      numItems: 3,
      isFavourited: false
    }
  ]
};

export default addStoryBookElementMeta('Items/Item Card', ItemCard);
export const Not_Favourited = addStoryBookElementTemplate(data, ItemCard);
export const Favourited = addStoryBookElementTemplate({
  ...data,
  isFavourited: true
}, ItemCard);
export const Not_Added = addStoryBookElementTemplate({
  ...data,
  stock: 0
}, ItemCard);