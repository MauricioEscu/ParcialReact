import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCharactersPage = ({ addCharacter }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    name: '', game: 'MK11', skills: '', image: '', reino: '', frase: '', alineacion: ''
  });

  // Estilos constantes para mantener la consistencia
  const styles = {
    formContainer: {
      backgroundColor: '#111111',
      border: '1px solid #b71c1c',
      padding: '30px',
      color: '#ffffff',
      borderRadius: '4px'
    },
    input: {
      backgroundColor: '#1a1a1a',
      border: '1px solid #333333',
      color: '#ffffff',
    },
    label: {
      fontWeight: '600',
      marginBottom: '5px',
      color: '#dddddd'
    },
    btnPrimary: {
      backgroundColor: '#b71c1c',
      border: 'none',
      color: '#ffffff',
      fontWeight: '700'
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { alert('Solo imágenes.'); return; }
    if (file.size > 1024 * 1024) { alert('Máximo 1MB.'); return; }

    const reader = new FileReader();
    reader.onloadend = () => { setFormData((prev) => ({ ...prev, image: reader.result })); };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.skills.trim()) {
      alert('Completa los campos obligatorios.');
      return;
    }
    if (addCharacter(formData)) { navigate('/characters'); }
  };

  return (
    <div className="content-wrapper">
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <h2 style={{ color: '#ff4d4d', marginBottom: '25px', borderBottom: '2px solid #b71c1c', paddingBottom: '10px' }}>
          Registrar Nuevo Luchador
        </h2>
        
        {/* Nombre */}
        <div className="mb-3">
          <label style={styles.label}>Nombre:</label>
          <input type="text" className="form-control" style={styles.input} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
        </div>

        {/* Alineación */}
        <div className="mb-3">
          <label style={styles.label}>Alineación:</label>
          <select className="form-select" style={styles.input} value={formData.alineacion} onChange={(e) => setFormData({...formData, alineacion: e.target.value})}>
            <option value="">Seleccionar Alineación</option>
            <option value="Neutral">Neutral</option>
            <option value="Bien">Bien</option>
            <option value="Mal">Mal</option>
          </select>
        </div>

        {/* Habilidades */}
        <div className="mb-3">
          <label style={styles.label}>Habilidades:</label>
          <textarea className="form-control" style={styles.input} value={formData.skills} onChange={(e) => setFormData({...formData, skills: e.target.value})} required />
        </div>

        {/* Imagen */}
        <div className="mb-3">
          <label style={styles.label}>Subir Imagen (Max 1MB):</label>
          <input type="file" className="form-control" style={styles.input} accept="image/*" onChange={handleImageChange} />
        </div>

        {/* Juego */}
        <div className="mb-3">
          <label style={styles.label}>Juego / Versión:</label>
          <select className="form-select" style={styles.input} value={formData.game} onChange={(e) => setFormData({...formData, game: e.target.value})}>
            <option value="MK11">MK11</option>
            <option value="MKX">MKX</option>
            <option value="MK9">MK9</option>
            <option value="MK1">MK1</option>
          </select>
        </div>
        
        {/* Reino */}
        <div className="mb-3">
          <label style={styles.label}>Reino:</label>
          <select className="form-select" style={styles.input} value={formData.reino} onChange={(e) => setFormData({...formData, reino: e.target.value})}>
            <option value="">Seleccionar Reino</option>
            <option value="Earthrealm">Earthrealm</option>
            <option value="Netherrealm">Netherrealm</option>
            <option value="Outworld">Outworld</option>
            <option value="Edenia">Edenia</option>
          </select>
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button type="button" className="btn btn-outline-light" onClick={() => navigate('/characters')}>Cancelar</button>
          <button type="submit" className="btn btn-danger px-5" style={styles.btnPrimary}>Crear Personaje</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCharactersPage;