import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import store from './store'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider>
      <UserProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </UserProvider>
    </ThemeProvider>
  </StrictMode>
);
