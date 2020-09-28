import { Brand, BrandState } from "../redux/brands/data";
import { BackgroundTheme, Category, CategoryState, TextPosition } from "../redux/categories/data";
import { getBrandImage, getBrandName, getCategoryName, isQueryPresentInString, toTitleCase } from "./utils";

describe('tests for utils', () => {
  it('tests getBrandName method', () => {
    const brands: BrandState[] = [
      {
        id: Brand.KWALITY_WALLS,
        name: 'Kwality Walls',
        image: '',
        numItems: 3,
        isFavourited: false
      }
    ];
    expect(getBrandName(brands, Brand.KWALITY_WALLS)).toEqual('Kwality Walls');
  });
  it('tests getBrandImage method', () => {
    const brands: BrandState[] = [
      {
        id: Brand.KWALITY_WALLS,
        name: 'Kwality Walls',
        image: 'test/image',
        numItems: 3,
        isFavourited: false
      }
    ];
    expect(getBrandImage(brands, Brand.KWALITY_WALLS)).toEqual('test/image');
  });
  it('tests getCategoryName method', () => {
    const categories: CategoryState[] = [
      {
        id: Category.ICE_CREAM,
        name: 'Ice Cream',
        image: '',
        numItems: 6,
        textPosition: TextPosition.RIGHT,
        backgroundTheme: BackgroundTheme.DARK
      }
    ];
    expect(getCategoryName(categories, Category.ICE_CREAM)).toEqual('Ice Cream');
  });
  it('tests isQueryPresentInString method', () => {
    expect(isQueryPresentInString('abc', '12abc34')).toBeTruthy();
    expect(isQueryPresentInString('', '12abc34')).toBeTruthy();
    expect(isQueryPresentInString('abc', '1234')).toBeFalsy();
    expect(isQueryPresentInString('abc', '')).toBeFalsy();
  });
  it('tests toTitleCase method', () => {
    expect(toTitleCase('abc')).toEqual('Abc');
    expect(toTitleCase('')).toEqual('');
    expect(toTitleCase('some code')).toEqual('Some Code');
    expect(toTitleCase('Abc')).toEqual('Abc');
  });
});