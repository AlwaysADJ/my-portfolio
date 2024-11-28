import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';  // Global styles
import App from './App';  // Your main app component

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />  {/* This will mount your app */}
  </React.StrictMode>
);
