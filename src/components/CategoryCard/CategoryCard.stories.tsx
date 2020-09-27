import { CategoryCard, CategoryCardProps } from './CategoryCard';
import iceCreamImg from "../../assets/images/category_icecream.jpg"
import groceriesImg from "../../assets/images/category_groceries.jpg"
import { addStoryBookElementMeta, addStoryBookElementTemplate } from '../../utils/storybookUtils';
import { BackgroundTheme, Category, TextPosition } from '../../redux/categories/data';

const data: Omit<CategoryCardProps, 'location' | 'match' | 'history'> = {
  id: Category.ICE_CREAM,
  width: 50,
  image: iceCreamImg,
  name: "Ice Cream",
  numItems: 10,
  textPosition: TextPosition.RIGHT,
  backgroundTheme: BackgroundTheme.DARK
};

export default addStoryBookElementMeta('Items/Category Card', CategoryCard);
export const Simple_Card_Right_Aligned_Dark_Background = addStoryBookElementTemplate(data, CategoryCard);
export const Simple_Card_Left_Aligned_Light_Background = addStoryBookElementTemplate({
  ...data,
  textPosition: TextPosition.LEFT,
  backgroundTheme: BackgroundTheme.LIGHT,
  image: groceriesImg
}, CategoryCard);