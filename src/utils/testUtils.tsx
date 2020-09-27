import React from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import configureMockStore from 'redux-mock-store';
import { lightTheme } from "../themes";
import { RenderResult } from "@testing-library/react";
import { createMemoryHistory } from 'history';
import { CategoryState } from "../redux/categories/data";
import { rootReducer } from "../redux";
import SagaTester from "redux-saga-tester";
import { ItemState } from "../redux/items/data";
import { CombinedState } from "redux";
import { FilterState } from "../redux/filters/data";
import { BrandState } from "../redux/brands/data";

interface StoreParams {
  items?: ItemState[];
  categories?: CategoryState[];
  brands?: BrandState[];
  filters?: FilterState;
}

export const addRouteProvider = (app: any, path?: string) => {
  const history = createMemoryHistory();
  history.push(path ? path : '/');
  return (
    <Router history={history}>
      {app}
    </Router>
  );
}

export const addThemeProvider = (app: any, theme?: any) => {
  return (
    <ThemeProvider theme={theme || lightTheme}>
      {app}
    </ThemeProvider>
  );
}

export const addReduxProvider = (app: any, store: any) => {
  const middlewares = [];
  const mockStoreConfig = configureMockStore(middlewares);
  const mockStore = mockStoreConfig({
    items: {
      items: []
    },
    categories: {
      categories: []
    },
    brands: {
      brands: []
    },
    filters: {
      filters: {}
    }
  });
  return (
    <Provider store={store || mockStore}>
      {app}
    </Provider>
  );
}

export const addIntlProvider = (app: any, locale?: string) => {
  return (
    <IntlProvider locale={locale || 'en'}>
      {app}
    </IntlProvider>
  );
}

interface ProvidersParams {
  component: any;
  locale?: string;
  store?: any;
  theme?: any;
  path?: string;
}

export const addAllProviders = ({
  component,
  locale = undefined,
  store = undefined,
  theme = undefined,
  path = ''
}: ProvidersParams) => {
  return (
    addIntlProvider(
      addReduxProvider(
        addRouteProvider(
          addThemeProvider(
            component
          , theme)
        , path)
      , store)
    , locale)
  );
}

export const mouseClick = (node: HTMLElement): boolean =>
  node.dispatchEvent(new MouseEvent('click', { bubbles: true }));

export const getElementBySelector = (
  rendered: RenderResult,
  selectors: string
) => rendered.container.querySelectorAll(selectors);

export const getSagaTester = ({
  items = [],
  categories = [],
  brands = []
}: StoreParams) => new SagaTester({
  initialState: {
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
  reducers: rootReducer as CombinedState<any>
});
