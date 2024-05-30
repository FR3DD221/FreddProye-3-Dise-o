export function plantaXapi (objeto) {
    fetch('http://localhost:3000/guardarFabrica', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objeto)
    })
    .then(response => {
        if (response.ok) {
            console.log('Bridge guardado correctamente en el servidor');
        } else {
            throw new Error('Error al guardar el Bridge en el servidor');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


