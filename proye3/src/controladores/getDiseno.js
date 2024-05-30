export async function obtenerDatos() {
    try {
      const response = await fetch('http://localhost:3000/obtenerDiseno');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const jsonData = await response.json();
      return jsonData; // Devuelve el JSON obtenido
    } catch (error) {
      console.error(error);
      throw error;
    }
}