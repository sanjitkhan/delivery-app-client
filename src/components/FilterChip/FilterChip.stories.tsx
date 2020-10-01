import { addStoryBookElementMeta, addStoryBookElementTemplate } from '../../utils/storybookUtils';
import FilterChip from './FilterChip';
import mccainImg from "../../assets/images/brand_mccain.png"

const data: any = {
  text: 'McCain',
  onClick: () => {}
};

export default addStoryBookElementMeta('Filters/Filter Chip', FilterChip);
export const Chip_without_image = addStoryBookElementTemplate(data, FilterChip);
export const Chip_with_image = addStoryBookElementTemplate({
  ...data, 
  image: mccainImg
}, FilterChip);