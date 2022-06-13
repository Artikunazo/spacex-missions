import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'materialize-css/dist/css/materialize.min.css';
import 'bulma/css/bulma.css';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
