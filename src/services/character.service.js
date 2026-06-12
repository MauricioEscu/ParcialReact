const BASE_URL = 'https://mkapi.up.railway.app/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`Error en la API: ${response.status} ${response.statusText}`);
  }
  return await response.json();
};

export const postsService = {
  
  // 1. GET /characters - Obtén todos los personajes para el listado principal
  getAll: async () => {
    try {
      const response = await fetch(`${BASE_URL}/characters`);
      return await handleResponse(response);
    } catch (error) {
      console.error("Error en getAll:", error);
      throw new Error("No se pudo conectar con la API para listar los personajes.");
    }
  },

  // 2. GET /characters/:id - Obtener por ID para la pantalla de detalles
  getById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/characters/${id}`);
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error en getById (${id}):`, error);
      throw new Error(`No se pudo cargar el personaje con ID #${id}.`);
    }
  },

  // 3. POST /characters - Enviar los datos del formulario para crear un personaje nuevo
  create: async (characterData) => {
    try {
      const response = await fetch(`${BASE_URL}/characters`, {
        method: 'POST',
        body: JSON.stringify(characterData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await handleResponse(response);
    } catch (error) {
      console.error("Error en create:", error);
      throw new Error("Error al intentar registrar el personaje en la base de datos.");
    }
  },

  // 4. PUT /characters/:id - Enviar datos modificados para actualizar el luchador
  update: async (id, characterData) => {
    try {
      const response = await fetch(`${BASE_URL}/characters/${id}`, {
        method: 'PUT',
        body: JSON.stringify(characterData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error en update (${id}):`, error);
      throw new Error("No se pudieron guardar los cambios del personaje en el servidor.");
    }
  },

  // 5. DELETE /characters/:id - Borrar el personaje real de la base de datos
  delete: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/characters/${id}`, {
        method: 'DELETE',
      });
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error en delete (${id}):`, error);
      throw new Error("No se pudo eliminar el personaje de la API.");
    }
  }
};