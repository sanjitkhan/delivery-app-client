import React from "react";
import { createIntlCache, createIntl, IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import App from "../App";
import { rootReducer } from "../redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom';
import { lightTheme } from "../themes";
import { watchItemsFunctions } from "../redux/items";
import { watchBrandsFunctions } from "../redux/brands";
import { watchCategoriesFunctions } from "../redux/categories";
import { BrandState } from "../redux/brands/data";
import { CategoryState } from "../redux/categories/data";

// init store
export const initStore = () => {
  function* rootSaga() {
    yield all([fork(watchItemsFunctions), fork(watchBrandsFunctions), fork(watchCategoriesFunctions)]);
  }
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return store;
};


// intl utils
export async function loadLocaleData(locale: string) {
  const message = await import(`../../lang/${locale}.json`);
  return message.default;
}

// init
export const init = async (locale: string, store) => {
  // init intl
  const cache = createIntlCache();
  const messages = await loadLocaleData(locale);
  const intl = createIntl({
    locale,
    messages,
    defaultLocale: 'bn',
  }, cache);

  return (
    <IntlProvider {...intl}>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </IntlProvider>
  );
};

// other utils
export type GenericCallBack = (...args: any[]) => any;

export const getBrandName = (brands: BrandState[], id: BrandState['id']) => {
  return brands.find(brand => brand.id === id)?.name || '';
};

export const getBrandImage = (brands: BrandState[], id: BrandState['id']) => {
  return brands.find(brand => brand.id === id)?.image || '';
};

export const getCategoryName = (categories: CategoryState[], id: CategoryState['id']) => {
  return categories.find(category => category.id === id)?.name || '';
};

export const isQueryPresentInString = (query: string, str: string) => {
  return str.trim().toLowerCase().includes(query.trim().toLowerCase());
};

export const toTitleCase = (str: string) => {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}
