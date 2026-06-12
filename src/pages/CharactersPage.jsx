import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CharactersPage = ({ characters, loading, error, removeCharacter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredButtonId, setHoveredButtonId] = useState(null);

  const styles = {
    container: {
      background: '#000000',
      minHeight: '100vh',
      padding: '20px',
      color: '#ffffff',
      fontFamily: "'Roboto', sans-serif",
    },
    header: {
      textShadow: 'none',
    },
    borderBottomDanger: {
      borderBottom: '2px solid #b71c1c',
      paddingBottom: '12px',
    },
    inputSearch: {
      backgroundColor: '#1a1a1a',
      border: '1px solid #b71c1c',
      color: '#ffffff',
      fontWeight: '500',
    },
    card: {
      backgroundColor: '#111111',
      border: '1px solid #333333',
      boxShadow: 'none',
      color: '#ffffff',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardTitle: {
      color: '#ff4d4d',
      fontWeight: '700',
      textShadow: 'none',
      textTransform: 'uppercase',
      marginBottom: '0.25rem',
    },
    realmText: {
      color: '#81d4fa',
      marginBottom: '0.3rem',
      fontWeight: '600',
    },
    badge: {
      backgroundColor: '#b71c1c',
      fontWeight: '700',
      color: '#ffffff',
      alignSelf: 'flex-start',
      marginBottom: '8px',
      paddingLeft: '26px',
      backgroundImage: "url('https://img.icons8.com/emoji/20/000000/dragon-emoji.png')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '4px center',
      backgroundSize: '20px 20px',
    },
    cardText: {
      color: '#dddddd',
      fontSize: '0.9rem',
      flexGrow: 1,
    },
    cardButtons: {
      borderTop: '1px solid #333333',
      marginTop: 'auto',
      paddingTop: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '8px',
    },
    btnDanger: {
      backgroundColor: '#8b0000',
      border: '1px solid #ff4d4d',
      boxShadow: 'none',
      fontWeight: '600',
    },
    btnDangerHover: {
      backgroundColor: '#b71c1c',
      boxShadow: 'none',
    },
    spinner: {
      borderColor: '#b71c1c',
    },
  };

  const filteredCharacters = characters.filter((char) => {
    const term = searchTerm.toLowerCase();
    return (
      char.name.toLowerCase().includes(term) || 
      (char.realm && char.realm.toLowerCase().includes(term))
    );
  });

  if (loading) {
    return (
      <div className="text-center mt-5" style={{ color: '#ffffff' }}>
        <div className="spinner-border" role="status" style={{ ...styles.spinner, width: '3rem', height: '3rem' }}></div>
        <h4 className="mt-3">Invocando luchadores al torneo...</h4>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger mt-4 text-center"><h4>Error:</h4> {error}</div>;
  }

  return (
    <div className="content-wrapper" style={styles.container}>
      <div className="d-flex justify-content-between align-items-center mb-4" style={styles.borderBottomDanger}>
        <h1 className="fw-bold m-0" style={styles.header}>GUERREROS DISPONIBLES</h1>
        <Link to="/characters/nuevo" className="btn btn-danger fw-bold" style={styles.btnDanger}>
          + Registrar Nuevo
        </Link>
      </div>

        <div className="mb-4">
       <input 
       type="text" 
        className="form-control"
        placeholder="Buscar por nombre o reino..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
       ...styles.inputSearch, 
        color: '#ffffff', 
       WebkitTextFillColor: '#ffffff',
       opacity: 1
       }}
    onFocus={(e) => {
      e.target.style.borderColor = '#ff4d4d';
      e.target.style.color = '#ffffff';
     }}
      onBlur={(e) => {
      e.target.style.borderColor = '#b71c1c';
      e.target.style.color = '#ffffff';
     }}
     />
     </div> 

      {characters.length === 0 ? (
        <div className="alert alert-warning text-center mt-5" style={{ backgroundColor: '#1a1a1a', color: '#ff4d4d', fontWeight:'700', border: '1px solid #b71c1c' }}>
          <h3>La arena está vacía.</h3>
          <Link to="/characters/nuevo" className="btn btn-warning fw-bold mt-3">¡Ingresa a tu nuevo luchador!</Link>
        </div>
      ) : (
        <div className="row">
          {filteredCharacters.length === 0 ? (
            <div className="col-12 text-center mt-4" style={{color:'#ffffff'}}>
              <h5>No encontramos luchadores en ese reino o con ese nombre.</h5>
            </div>
          ) : (
            filteredCharacters.map((char) => (
              <div key={char.id} className="col-md-4 mb-4">
                <div className="card" style={styles.card}>
                  <img src={char.image || "https://via.placeholder.com/400x250?text=Sin+Imagen"} className="card-img-top" alt={char.name} style={{ height: '220px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h4 className="card-title" style={styles.cardTitle}>{char.name.toUpperCase()}</h4>
                    <p style={styles.realmText}><strong>Reino:</strong> {char.realm}</p>
                    <span className="badge" style={styles.badge}>{char.game}</span>
                    <p className="card-text" style={styles.cardText}>{char.skills}</p>
                    
                    <div style={styles.cardButtons}>
                      <Link to={`/characters/${char.id}`} className="btn btn-outline-light btn-sm px-3" style={{ fontWeight: '700' }}>Ver</Link>
                      <Link to={`/characters/${char.id}/editar`} className="btn btn-outline-warning btn-sm px-3" style={{ fontWeight: '700' }}>Editar</Link>
                      <button
                        className="btn btn-danger btn-sm px-3"
                        style={hoveredButtonId === char.id ? {...styles.btnDanger, ...styles.btnDangerHover} : styles.btnDanger}
                        onMouseEnter={() => setHoveredButtonId(char.id)}
                        onMouseLeave={() => setHoveredButtonId(null)}
                        onClick={() => removeCharacter(char.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CharactersPage;