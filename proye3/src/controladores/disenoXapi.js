export function disenoXapi (objeto) {
    fetch('http://localhost:3000/guardarDiseno', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(objeto),
    })
    .then(response => {
    if (!response.ok) {
        throw new Error('Error al guardar el objeto en el servidor');
    }
    return response.json();
    })
    .then(data => {
    console.log(data); // Aquí puedes manejar la respuesta del servidor
    })
    .catch(error => {
    console.error('Error:', error);
    });
}