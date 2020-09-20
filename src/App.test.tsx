import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { lightTheme } from './themes';
import { ThemeProvider } from 'styled-components';

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
          <App />
        </ThemeProvider>
      </Provider>
    </IntlProvider>
  );
  expect(getByText(/Ford/)).toBeInTheDocument();
  expect(getByText(/Increase/)).toBeInTheDocument(); //button
});
