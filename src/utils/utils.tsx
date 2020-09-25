import React from "react";
import { createIntlCache, createIntl, IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import App from "../App";
import { rootReducer } from "../redux";
import { watchApplicationFunctions } from "../redux/count";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom';
import { lightTheme } from "../themes";
import { watchItemsFunctions } from "../redux/items";

// init store
export const initStore = () => {
  function* rootSaga() {
    yield all([fork(watchApplicationFunctions), fork(watchItemsFunctions)]);
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