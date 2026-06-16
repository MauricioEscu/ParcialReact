import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Obligatorio para la cátedra y GitHub Pages
import App from './App';

// Buscamos el div con id="root" de nuestro index.html e inyectamos React adentro
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* El HashRouter envuelve a toda la app para que <Routes> y el Navbar funcionen sin romperse */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);  