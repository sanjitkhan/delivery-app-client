import CategoryCard, { CategoryCardProps } from './CategoryCard';
import iceCreamImg from "../../assets/images/icecream.jpg"
import { addStoryBookElementMeta, addStoryBookElementTemplate } from '../../utils/storybookUtils';

const data: CategoryCardProps = {
  image: iceCreamImg,
  name: "Ice Cream",
  numBrands: 8
};

export default addStoryBookElementMeta('Items/Category Card', CategoryCard);
export const Simple_Card = addStoryBookElementTemplate(data, CategoryCard);