import CategoryCard, { backgroundThemeEnum, CategoryCardProps, positionEnum } from './CategoryCard';
import iceCreamImg from "../../assets/images/category_icecream.jpg"
import groceriesImg from "../../assets/images/category_groceries.jpg"
import { addStoryBookElementMeta, addStoryBookElementTemplate } from '../../utils/storybookUtils';

const data: CategoryCardProps = {
  id: "icecream",
  width: 50,
  image: iceCreamImg,
  name: "Ice Cream",
  numBrands: 8,
  textPosition: positionEnum.RIGHT,
  backgroundTheme: backgroundThemeEnum.DARK
};

export default addStoryBookElementMeta('Items/Category Card', CategoryCard);
export const Simple_Card_Right_Aligned_Dark_Background = addStoryBookElementTemplate(data, CategoryCard);
export const Simple_Card_Left_Aligned_Light_Background = addStoryBookElementTemplate({
  ...data,
  textPosition: positionEnum.LEFT,
  backgroundTheme: backgroundThemeEnum.LIGHT,
  image: groceriesImg
}, CategoryCard);