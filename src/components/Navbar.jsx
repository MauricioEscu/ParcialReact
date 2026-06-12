import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-warning" to="/">
          🐉 MK11 Torneo
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/"
              >
                Inicio
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname.startsWith('/characters') && !location.pathname.includes('nuevo') ? 'active' : ''}`} 
                to="/characters"
              >
                Personajes
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link 
              className={`btn ${location.pathname === '/characters/nuevo' ? 'btn-success' : 'btn-outline-success'}`} 
              to="/characters/nuevo"
            >
              ➕ Nuevo Luchador
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;