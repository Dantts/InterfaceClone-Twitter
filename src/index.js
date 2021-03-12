import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

import PanelProvider from './Utils/Contexts/ThemePanelContext';
import ThemeProvider from './Utils/Contexts/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PanelProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </PanelProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
