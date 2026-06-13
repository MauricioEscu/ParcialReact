import { useState, useEffect } from 'react';
import { postsService } from '../services/character.service'; 

export const usePosts = () => {
  // 1️⃣ ESTADOS PRINCIPALES
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 2️⃣ ACCIÓN: Cargar personajes
  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await postsService.getAll();
        if (data && data.length > 0) {
          setCharacters(data);
        } else {
          throw new Error("Formato de API vacío");
        }
      } catch (err) {
        console.warn('API externa inaccesible. Cargando personajes de respaldo local.', err.message);
        setCharacters([
          { id: 1, name: 'Scorpion', game: 'MK11', skills: 'Arpón, Manipulación de fuego del Netherrealm y teletransportación.', image: 'https://assetsio.gnwcdn.com/mortal_kombat_x_scorpion.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp', alineacion: 'Neultral/Mal(MK9),Bien (MKX,MK11,MK1)', realm: 'Earthrealm', frase: '¡Ven aquí!' },
          { id: 2, name: 'Sub-Zero', game: 'MK11', skills: 'Criomancia, manipulación del hielo, clones y ráfagas congelantes.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCG1-Z8-ibh3Yd_Yi_9D0kTxfJIckqX9YRhvYJsNJMg&s=10', alineacion: 'Neultral/Mal(MK9),Bien (MKX,MK11,MK1)', realm: 'Earthrealm', frase: '¡El hielo es mi aliado más letal!' },
          { id: 3, name: 'Raiden', game: 'MK11', skills: 'Dios del Trueno, control de la electricidad, teletransportación y vuelo electrizante.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKAAyPPLMchEdf5K1oFb8hhqZLI5K3FPX_FU1wGQxvEFJVcA5DMno2_sG&s=10', alineacion: 'Bien', realm: 'Earthrealm', frase: '¡Protegeré el Earthrealm a toda costa!' },
          { id: 4, name: 'Liu Kang', game: 'MK11', skills: 'Maestro de artes marciales, control del fuego, vuelo y ataques de dragón.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNQm_N3tqhSAZZeZf7qFNkD3Z8k10U3HdXDia7bKpcfA&s=10', alineacion: 'Bien, Mal(MKX)', realm: 'Earthrealm', frase: '¡Soy el campeón del torneo!' },
          { id: 5, name: 'Johnny Cage', game: 'MK11', skills: 'Actor, luchador y maestro de artes marciales.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9FOmJZiEXF25AeZvfnb3Qzgy_ZVYmurVfjMWsS8T7UcbDu-7pZ7znhc&s=10', alineacion: 'Bien', realm: 'Earthrealm', frase: '¡Soy una estrella de cine, no un luchador común!' },
          { id: 6, name: 'Shang Tsung', game: 'MK11', skills: 'Maestro de las almas, cambiaformas y hechicero poderoso.', image: 'https://nintendoeverything.com/wp-content/uploads/mortal-kombat-11-shang-tsung.jpg', alineacion: 'Mal', realm: 'Outworld', frase: '¡Robaré tu alma y tu poder para mí!' },
          { id: 7, name: 'Shao Khan', game: 'MK11', skills: 'Emperador de Outworld, fuerza sobrehumana y ataques devastadores.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4Q6-iTE2l0DY1Sn1YdFJrJLlb5UGH0ti-wFzKCopIw&s=10', alineacion: 'Mal', realm: 'Outworld', frase: '¡Soy el gobernante supremo de Outworld!' },
          { id: 8, name: 'Goro', game: 'MK11', skills: 'Shokan de cuatro brazos, fuerza bruta y ataques aplastantes.', image: 'https://static.wikia.nocookie.net/mortalkombat/images/c/c7/Gororendermkx.png/revision/latest?cb=20160310183418&path-prefix=es', alineacion: 'Mal', realm: 'Outworld', frase: '¡Soy el campeón invicto de Outworld!' },
          { id: 9, name: 'Sindel', game: 'MK11', skills: 'Reina de Edenia, gritos sónicos y manipulación de cabello letal.', image: 'https://tm.ibxk.com.br/2023/05/12/12165117238353.jpg', alineacion: 'Mal', realm: 'Edenia and Outworld', frase: '¡Mi grito puede destruir montañas!' },
          { id: 10, name: 'Mileena', game: 'MK11', skills: 'Híbrida Tarkatan, velocidad letal y ataques con cuchillas afiladas.', image: 'https://i.ytimg.com/vi/nNaFW_DYcqw/maxresdefault.jpg', alineacion: 'Mal', realm: 'Outworld and Edenia', frase: '¡Soy la hija favorita de Shao Khan!' },
          { id: 11, name: 'Quan Chi', game: 'MKX', skills: 'Hechicero necromante, manipulación de almas y magia oscura.', image: 'https://static.wikia.nocookie.net/mortalkombat/images/f/fe/QuanChiMKXRender2.jpg/revision/latest?cb=20160219214905&path-prefix=es', alineacion: 'Mal', realm: 'Netherrealm', frase: '¡Soy el maestro de las almas perdidas!' },
          { id: 12, name: 'Jax Briggs', game: 'MK11', skills: 'Soldado de Earthrealm, Uso de Armas de fuego, Fuerza sobrehumana y brazos cibernéticos.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbSZOkWtkpOXXqGuLk1JSfSil2Ol6dQ-9Qr8bWokml_w&s=10', alineacion: 'Bien', realm: 'Earthrealm', frase: '¡Lucharé por la justicia de Earthrealm!' },
          { id: 13, name: 'Kitana', game: 'MK11', skills: ' Habilidades de combate; uso de abanicos y control de energía.', image: 'https://assetsio.gnwcdn.com/mortal-kombat-x-kitana-and-kung-lao-gameplay-revealed-1421313280498.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp', alineacion: 'Bien and Mal (MKX)', realm: 'Edenia and Outworld', frase: '¡Soy la princesa de Edenia!' },
          { id: 14, name: 'Kung Lao', game: 'MK11', skills: 'Maestro de las artes marciales, velocidad sobrehumana, Uso de Sombrero y técnicas de combate.', image: 'https://static.wikia.nocookie.net/mortalkombat/images/d/d4/KungLaoMKXRnderMK3.jpg/revision/latest?cb=20160220002031&path-prefix=es', alineacion: 'Bien y Mal(MKX)', realm: 'Earthrealm', frase: '¡Soy el maestro de las artes marciales!' },
          { id: 15, name: 'Reptile', game: 'MKX', skills: ' Velocidad sobrehumana, Manipulacion de acido y técnicas de combate.', image: 'https://i.ytimg.com/vi/qmfm6JzuoZQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC5xnaUcO69Z5z81lnHeR3byAgcLQ', alineacion: 'Neutral', realm: 'Outworld', frase: '¡Soy el asesino de la secta de los Reptiles!' }
        ]);
        setError(null);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  // 3️⃣ ACCIÓN: Crear personaje (CON VALIDACIÓN DE DUPLICADOS)
  const addCharacter = (newCharacterData) => {
    // Verificamos si el personaje ya existe (comparando nombres en minúsculas)
    const yaExiste = characters.some(
      (c) => c.name.toLowerCase() === newCharacterData.name.toLowerCase()
    );

    if (yaExiste) {
      alert("¡Error: Este personaje ya ha sido reclutado para el torneo!");
      return false; // Retornamos false para que el formulario no navegue
    }

    try {
      const nextId = characters.length > 0 ? Math.max(...characters.map(c => c.id)) + 1 : 1;
      const createdCharacter = { id: nextId, ...newCharacterData };
      setCharacters((prev) => [createdCharacter, ...prev]);
      return true; // Retornamos true si se guardó con éxito
    } catch (err) {
      console.error('Error al guardar:', err.message);
      return false; 
    }
  };

  const updateCharacter = (id, updatedData) => {
    setCharacters((prev) => 
      prev.map((char) => (char.id === id ? { ...char, ...updatedData } : char))
    );
  };

  const removeCharacter = async (id) => {
    try {
      await postsService.delete(id);
    } catch (err) {
      console.warn(`Error en borrado (CORS), procediendo localmente.`, err.message);
    } finally {
      setCharacters((prev) => prev.filter((char) => char.id !== id));
    }
  };

  return {
    characters,
    loading,
    error,
    addCharacter,
    updateCharacter,
    removeCharacter,
    setCharacters 
  };
};