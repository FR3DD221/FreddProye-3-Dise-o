import { obtenerDatos } from './getDiseno';

export async function reemplazar(objeto) {
    try {
        // Obtener los datos actualizados
        const datos = await obtenerDatos();

        // Obtener la clave del objeto recibido
        const id = Object.keys(objeto)[0];

        // Verificar si hay un objeto con el mismo ID en los datos
        if (datos.hasOwnProperty(id)) {
            // Reemplazar el objeto existente con el objeto recibido
            datos[id] = objeto[id];
        } // Convertir el objeto a una cadena JSON

        console.log(JSON.stringify(objeto))

        const response = await fetch('http://localhost:3000/guardarDisenoEs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });
        
        if (!response.ok) {
            throw new Error('Error al guardar el objeto en el servidor');
        }
        
        const data = await response.text();
        console.log(data); // Muestra el mensaje de respuesta del servidor

    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}
