import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders, mouseClick } from '../../utils/testUtils';
import App from '../../App';
import { BackgroundTheme, TextPosition } from '../../redux/categories/data';

describe('Items page', () => {
  it('renders items page properly', () => {
    const rendered: RenderResult = render(
      addAllProviders({component: <App />, storeData: {
        categories: [
          {
            id: 'icecream',
            name: 'Ice Cream',
            image: '',
            textPosition: TextPosition.RIGHT,
            backgroundTheme: BackgroundTheme.LIGHT
          }
        ]
      }})
    );
    const { getByText } = rendered;
    expect(getByText(/Categories/)).toBeInTheDocument(); // "Categories" tab
    expect(getByText(/Brands/)).toBeInTheDocument(); // "Brands" tab
    expect(getByText(/Ice Cream/)).toBeInTheDocument(); // "Categories" tab data
    if (rendered) rendered.unmount();
  });

  it('routes to the correct tab on clicking a tabMenu button', () => {
    const rendered: RenderResult = render(
      addAllProviders({
        component: <App />,
        path: '/items',
        storeData: {
          categories: [
            {
              id: 'icecream',
              name: 'Ice Cream',
              image: '',
              textPosition: TextPosition.RIGHT,
              backgroundTheme: BackgroundTheme.LIGHT
            },
          ],
          brands: [
            {
              id: 'britannia',
              name: 'Britannia',
              numItems: 7,
              image: '',
              isFavourited: false
            }
          ],
          items: [

          ]
        }
      })
    );
    const { getByText } = rendered;
    const CategoriesScreenElement = getByText(/Ice Cream/);
    expect(CategoriesScreenElement).toBeInTheDocument(); // "Categories" tab data
    
    const BrandsElement = getByText(/Brands/);
    mouseClick(BrandsElement);

    const BrandsScreenElement = getByText(/Britannia/);
    expect(CategoriesScreenElement).not.toBeInTheDocument();
    expect(BrandsScreenElement).toBeInTheDocument();
  });
});
