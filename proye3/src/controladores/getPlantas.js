export async function obtenerDatosFabrica() {
    try {
        const response = await fetch('http://localhost:3000/obtenerFabricas');
        if (response.ok) {
            const data = await response.json();
            console.log('Datos obtenidos del servidor:', data);
            return data; // Opcional: devolver los datos obtenidos
        } else {
            throw new Error('Error al obtener los datos del servidor');
        }
    } catch (error) {
        console.error('Error:', error);
        throw error; // Opcional: relanzar el error para que pueda ser manejado externamente
    }
}


export async function eliminarPlanta(nombrePlanta) {
    try {
        const response = await fetch(`http://localhost:3000/eliminarPlantaPorNombre/${nombrePlanta}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error al eliminar la planta');
        }

        console.log('Planta eliminada correctamente del servidor');
    } catch (error) {
        throw error;
    }
}

