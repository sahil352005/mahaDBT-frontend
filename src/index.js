import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

document.body.innerHTML = '<div id="root"></div>';

// Rendering root
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
