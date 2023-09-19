import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Botao from './components/Botao';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
    <Botao />
    </>
  </React.StrictMode>
);
