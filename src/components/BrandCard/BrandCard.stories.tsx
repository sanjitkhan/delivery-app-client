import { BrandCard, BrandCardProps } from './BrandCard';
import iceCreamImg from "../../assets/images/brand_kwalitywalls.png"
import { addStoryBookElementMeta, addStoryBookElementTemplate } from '../../utils/storybookUtils';
import { Brand } from '../../redux/brands/data';

const data: Omit<BrandCardProps, 'location' | 'match' | 'history'> = {
  id: Brand.KWALITY_WALLS,
  width: 20,
  image: iceCreamImg,
  name: "Kwality Walls",
  numItems: 8,
  isFavourited: false
};

export default addStoryBookElementMeta('Items/Brand Card', BrandCard);
export const Not_Favourited = addStoryBookElementTemplate(data, BrandCard);
export const Favourited = addStoryBookElementTemplate({
  ...data,
  isFavourited: true
}, BrandCard);