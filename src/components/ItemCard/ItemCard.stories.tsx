import ItemCard, { ItemCardProps } from './ItemCard';
import iceCreamImg from "../../assets/images/brand_kwalitywalls.png"
import { addStoryBookElementMeta, addStoryBookElementTemplate } from '../../utils/storybookUtils';
import { Brand } from '../../redux/brands/data';

const data: Partial<ItemCardProps> = {
  id: "icecream",
  width: 20,
  image: iceCreamImg,
  name: "Ice Cream",
  brand: Brand.KWALITY_WALLS,
  stock: 8,
  price: 100.00,
  isFavourited: false
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