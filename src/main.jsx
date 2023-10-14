import React from 'react';
import ReactDOM from 'react-dom/client';
// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// App
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
