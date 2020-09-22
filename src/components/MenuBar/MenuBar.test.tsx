import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { lightTheme } from './themes';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore([]);

test('renders base app properly', () => {
  const store = mockStore({
    count: {
      count: 0
    }
  });
  const { getByText } = render(
    <IntlProvider locale={'en'}>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </IntlProvider>
  );
  expect(getByText(/Order/)).toBeInTheDocument(); //button
});
