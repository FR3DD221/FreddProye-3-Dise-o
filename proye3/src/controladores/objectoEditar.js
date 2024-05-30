import { obtenerDatos } from './getDiseno';

export async function objectoEditar() {
    try {
        // Obtener los datos actualizados
        const datos = await obtenerDatos();

        // Buscar el objeto con la bandera editar establecida en true
        const nombreObjetoEditado = Object.keys(datos).find(nombre => datos[nombre].editar === true);
        const objetoEditado = datos[nombreObjetoEditado];

        // Verificar si se encontró un objeto editado
        if (nombreObjetoEditado && objetoEditado) {
            console.log('Objeto encontrado:', nombreObjetoEditado, objetoEditado);
            return { [nombreObjetoEditado]: objetoEditado };
        } else {
            console.log('No se encontró ningún objeto con la bandera editar establecida en true.');
            return null;
        }
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error; // Propagar el error para que sea manejado por el código que llame a esta función
    }
}
