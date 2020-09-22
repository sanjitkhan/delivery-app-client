import React from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import configureMockStore from 'redux-mock-store';
import { lightTheme } from "../themes";
import { RenderResult } from "@testing-library/react";

export const addRouteProvider = (app: JSX.Element) => {
  return (
    <BrowserRouter>
      {app}
    </BrowserRouter>
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
    count: {
      count: 0
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

export const addAllProviders = (app: JSX.Element, locale?: string, store?: any, theme?: any) => {
  return (
    addIntlProvider(
      addReduxProvider(
        addRouteProvider(
          addThemeProvider(
            app
          )
        )
      )
    )
  );
}

export const mouseClick = (node: HTMLElement): boolean =>
  node.dispatchEvent(new MouseEvent('click', { bubbles: true }));

export const getElementBySelector = (
  rendered: RenderResult,
  selectors: string
) => rendered.container.querySelectorAll(selectors);