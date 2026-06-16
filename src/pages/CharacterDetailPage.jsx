import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CharacterDetailPage = ({ characters }) => {
  const { id } = useParams();
  const character = characters.find((c) => c.id === Number(id));

  if (!character) {
    return <div className="text-center mt-5 text-white"><h2>Personaje no encontrado</h2></div>;
  }

  return (
    <div className="container mt-5">
      <div className="card bg-dark text-white border-danger shadow-lg p-4">
        <div className="row">

          {/* Columna Izquierda: Imagen */}
          <div className="col-md-4">
            <img
              src={character.image}
              alt={character.name}
              className="img-fluid rounded border border-danger"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>

          {/* Columna Derecha: Información */}
          <div className="col-md-8">
            <h1 className="text-danger fw-bold">{character.name.toUpperCase()}</h1>
            <h4 className="text-secondary">{character.game}</h4>
            <hr className="border-danger" />
            <h5 className="mt-4 text-warning">Habilidades:</h5>
            <p className="lead">{character.skills}</p>
            <p className="text-muted mt-4"><em>Reino: {character.reino}</em></p>
            <p className="text-primary mt-4"><strong>Frase: {character.frase}</strong></p>
            <p className="text-info mt-4"><em>Alineación: {character.alineacion}</em></p>

            <div className="mt-5">
              <Link to="/characters" className="btn btn-outline-light">
                ← Volver al Torneo
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPage;