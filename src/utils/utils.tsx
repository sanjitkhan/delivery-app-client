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