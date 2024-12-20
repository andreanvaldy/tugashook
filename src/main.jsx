import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Jalur ke CSS global
import App from './App.jsx'; // Pastikan jalur App.jsx benar

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
