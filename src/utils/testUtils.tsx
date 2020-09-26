import React from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import configureMockStore from 'redux-mock-store';
import { lightTheme } from "../themes";
import { RenderResult } from "@testing-library/react";
import { createMemoryHistory } from 'history';
import { BackgroundTheme, CategoryState, TextPosition } from "../redux/categories/data";
import iceCreamImg from "../assets/images/category_icecream.jpg";
import britanniaImg from "../assets/images/brand_britannia.png";
import { rootReducer } from "../redux";
import SagaTester from "redux-saga-tester";
import { ItemState } from "../redux/items/data";
import { BrandState } from "../redux/brands/data";

export const addRouteProvider = (app: JSX.Element, path?: string) => {
  const history = createMemoryHistory();
  history.push(path ? path : '/');
  return (
    <Router history={history}>
      {app}
    </Router>
  );
}

export const addThemeProvider = (app: JSX.Element, theme?: any) => {
  return (
    <ThemeProvider theme={theme || lightTheme}>
      {app}
    </ThemeProvider>
  );
}

export const addReduxProvider = (app: JSX.Element, store?: any) => {
  const mockStoreConfig = configureMockStore([]);
  const mockStore = store || mockStoreConfig({
    categories: {
      categories: [
        {
          id: 'icecream',
          name: 'Ice Cream',
          image: iceCreamImg,
          textPosition: TextPosition.RIGHT,
          backgroundTheme: BackgroundTheme.DARK
        }
      ]
    },
    brands: {
      brands: [
        {
          id: 'britannia',
          name: 'Britannia',
          image: britanniaImg,
          numItems: 7,
          isFavourited: false
        }
      ]
    }
  });
  return (
    <Provider store={mockStore}>
      {app}
    </Provider>
  );
}

export const addIntlProvider = (app: JSX.Element, locale?: string) => {
  return (
    <IntlProvider locale={locale || 'en'}>
      {app}
    </IntlProvider>
  );
}

export const addAllProviders = (app: JSX.Element, locale?: string, store?: any, theme?: any, path?: string) => {
  return (
    addIntlProvider(
      addReduxProvider(
        addRouteProvider(
          addThemeProvider(
            app
          , theme || undefined)
        , path || undefined)
      , store || undefined)
    , locale || undefined)
  );
}

export const mouseClick = (node: HTMLElement): boolean =>
  node.dispatchEvent(new MouseEvent('click', { bubbles: true }));

export const getElementBySelector = (
  rendered: RenderResult,
  selectors: string
) => rendered.container.querySelectorAll(selectors);

export interface SagaTesterParams {
  count?: number, 
  items?: ItemState[], 
  categories?: CategoryState[], 
  brands?: BrandState[]
} 

export const getSagaTester = ({
  count = 0,
  items = [],
  categories = [],
  brands = []
}: SagaTesterParams) => new SagaTester({
  initialState: {
    count: {
      count: count
    },
    items: {
      items: items
    },
    categories: {
      categories: categories
    },
    brands: {
      brands: brands
    }
  },
  reducers: rootReducer
});
