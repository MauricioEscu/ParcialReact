import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCharacterPage = ({ characters, updateCharacter }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Estado inicial del formulario
  const [formData, setFormData] = useState({
    name: '',
    game: 'MK11',
    skills: ''
  });

  // 1️⃣ Cargar los datos del personaje al abrir la página
  useEffect(() => {
    const character = characters.find((c) => c.id === Number(id));
    if (character) {
      setFormData({
        name: character.name,
        game: character.game,
        skills: character.skills
      });
    }
  }, [id, characters]);

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 2️⃣ Guardar cambios
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación: Solo letras y espacios (Regex)
    const soloLetrasRegEx = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (!soloLetrasRegEx.test(formData.name) || !soloLetrasRegEx.test(formData.skills)) {
      alert('Error: El nombre y las habilidades solo pueden contener letras y espacios.');
      return;
    }

    // Enviamos el objeto con las propiedades actualizadas
    updateCharacter(Number(id), {
      name: formData.name,
      game: formData.game,
      skills: formData.skills
    });

    navigate('/characters');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <div className="card bg-dark text-white border-warning shadow-lg">
        <div className="card-header border-warning text-center bg-black py-3">
          <h2 className="text-warning fw-bold m-0">EDITAR COMBATIENTE</h2>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Nombre del Personaje:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label fw-bold">Juego / Versión:</label>
              <select
                name="game"
                className="form-select"
                value={formData.game}
                onChange={handleChange}
              >
                <option value="MK11">Mortal Kombat 11</option>
                <option value="MKX">Mortal Kombat X</option>
                <option value="MK1">Mortal Kombat 1</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Habilidades Especiales:</label>
              <textarea
                name="skills"
                rows="3"
                className="form-control"
                value={formData.skills}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <button 
                type="button" 
                className="btn btn-outline-light" 
                onClick={() => navigate('/characters')}
              >
                Cancelar
              </button>
              <button type="submit" className="btn btn-warning fw-bold">
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCharacterPage;