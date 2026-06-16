import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [hover, setHover] = useState(null);

  const styles = {
    page: {
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '-56px', /* Ajusta este valor si tu Navbar es más alto o bajo */
      paddingTop: '56px',
      background: `
        linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
        radial-gradient(circle at center, #3d0000 0%, #000000 70%)
      `,
    },
    container: {
      background: 'rgba(10, 0, 0, 0.85)',
      color: '#ff4d4d',
      padding: '4rem 3rem',
      border: '1px solid #ff4d4d',
      borderRadius: '8px',
      maxWidth: '700px',
      width: '90%',
      textAlign: 'center',
      boxShadow: '0 0 20px rgba(255, 0, 0, 0.4), inset 0 0 20px rgba(255, 0, 0, 0.2)',
      backdropFilter: 'blur(5px)',
    },
    header: {
      color: '#fff',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textShadow: '0 0 15px #ff0000, 0 0 30px #ff0000',
      marginBottom: '1rem',
      letterSpacing: '5px',
      fontSize: '3rem',
    },
    lead: {
      color: '#ffcccc',
      fontSize: '1.2rem',
      marginBottom: '2rem',
      fontStyle: 'italic',
    },
    btnBase: {
      padding: '12px 30px',
      margin: '0 10px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderRadius: '2px',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      border: '1px solid #ff0000',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.header}>Torneo de MortalKombat</h1>
        <p style={styles.lead}>"Test your might"</p>

        <p style={{ color: '#aaa', marginBottom: '2rem' }}>
          Administra la lista de guerreros, registra nuevas incorporaciones o elimínalos del torneo.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Link
            to="/characters"
            style={{
              ...styles.btnBase,
              background: hover === 'ver' ? '#ff0000' : 'transparent',
              color: hover === 'ver' ? '#fff' : '#ff0000',
              boxShadow: hover === 'ver' ? '0 0 15px #ff0000' : 'none'
            }}
            onMouseEnter={() => setHover('ver')}
            onMouseLeave={() => setHover(null)}
          >
            Ver Luchadores Registrados
          </Link>

          <Link
            to="/characters/nuevo"
            style={{
              ...styles.btnBase,
              background: hover === 'nuevo' ? '#ff0000' : 'transparent',
              color: hover === 'nuevo' ? '#fff' : '#ff0000',
              boxShadow: hover === 'nuevo' ? '0 0 15px #ff0000' : 'none'
            }}
            onMouseEnter={() => setHover('nuevo')}
            onMouseLeave={() => setHover(null)}
          >
            Registrar Nuevo Luchador
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;