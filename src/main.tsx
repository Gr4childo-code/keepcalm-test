import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Layout } from './components/global/Layout/Layout.tsx';

import './styles/normalize.scss';
import './styles/grid.scss';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
