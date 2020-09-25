import BrandCard, { BrandCardProps } from './BrandCard';
import iceCreamImg from "../../assets/images/brand_kwalitywalls.png"
import { addStoryBookElementMeta, addStoryBookElementTemplate } from '../../utils/storybookUtils';

const data: BrandCardProps = {
  id: "icecream",
  width: 20,
  image: iceCreamImg,
  name: "Ice Cream",
  numItems: 8
};

export default addStoryBookElementMeta('Items/Brand Card', BrandCard);
export const Not_Favourited = addStoryBookElementTemplate(data, BrandCard);
export const Favourited = addStoryBookElementTemplate({
  ...data,
  isFavourited: true
}, BrandCard);