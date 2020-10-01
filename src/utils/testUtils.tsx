import React from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import configureMockStore from 'redux-mock-store';
import { lightTheme } from "../themes";
import { fireEvent, RenderResult } from "@testing-library/react";
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


export const getSagaTester = ({
  items = [],
  categories = [],
  brands = [],
  filters = {}
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
    },
    filters: {
      filters: filters
    }
  },
  reducers: rootReducer as CombinedState<any>
});

export const getMockStore = ({
  items = [],
  categories = [],
  brands = [],
  filters = {}
}: StoreParams) => {
  const mockStoreConfig = configureMockStore([]);
  const mockStore = mockStoreConfig({
    items: {
      items: items
    },
    categories: {
      categories: categories
    },
    brands: {
      brands: brands
    },
    filters: {
      filters: filters
    }
  });
  return mockStore;
};

export const addReduxProvider = (app: any, store: any) => {
  return (
    <Provider store={store || getMockStore({})}>
      {app}
    </Provider>
  );
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
  fireEvent.click(node);

export const changeInput = (node: any, value: string): boolean =>
  fireEvent.change(node, { target: { value: value } });


export const getElementBySelector = (
  rendered: RenderResult,
  selectors: string
) => rendered.container.querySelectorAll(selectors);
