const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Importa el middleware CORS

const app = express();
const PORT = 3000;

// Middleware para manejar solicitudes JSON
app.use(express.json());
// Middleware CORS
app.use(cors({
  origin: 'http://localhost:3001' // Permite solicitudes solo desde http://localhost:3001
}));

// Ruta para guardar el objeto en el JSON
app.post('/guardarDiseno', (req, res) => {
    const nuevoObjeto = req.body;

    fs.readFile('disenos.json', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer el archivo JSON');
            return;
        }

        let objetosExistentes = {};
        try {
            objetosExistentes = JSON.parse(data);
        } catch (error) {
            res.status(500).send('Error al parsear el archivo JSON existente');
            return;
        }

        const nuevosObjetos = {
            ...objetosExistentes,
            ...nuevoObjeto
        };

        fs.writeFile('disenos.json', JSON.stringify(nuevosObjetos), (err) => {
            if (err) {
                res.status(500).send('Error al guardar el objeto en el archivo JSON');
            } else {
                res.status(200).send('Objeto guardado correctamente en el archivo JSON');
            }
        });
    });
});

app.post('/guardarDisenoEs', (req, res) => {
    const nuevoObjeto = req.body;

    fs.writeFile('disenos.json', JSON.stringify(nuevoObjeto), (err) => {
        if (err) {
            res.status(500).send('Error al guardar el objeto en el archivo JSON');
        } else {
            res.status(200).send('Objeto guardado correctamente en el archivo JSON');
        }
    });
});



// Nueva ruta para obtener el JSON
app.get('/obtenerDiseno', (req, res) => {
    fs.readFile('disenos.json', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer el archivo JSON');
            return;
        }

        let objetos;
        try {
            objetos = JSON.parse(data);
        } catch (error) {
            res.status(500).send('Error al parsear el archivo JSON');
            return;
        }

        // Envía los datos JSON como respuesta
        res.json(objetos);
    });
});


app.delete('/eliminar/:key', (req, res) => {
    const { key } = req.params;
    // Read the JSON file
    fs.readFile('disenos.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Parse the JSON data
        let jsonData = {};
        try {
            jsonData = JSON.parse(data);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Check if the key exists in the JSON data
        if (!jsonData.hasOwnProperty(key)) {
            res.status(404).send('Data with the provided key not found');
            return;
        }

        // Delete the data associated with the key
        delete jsonData[key];

        // Write the updated JSON data back to the file
        fs.writeFile('disenos.json', JSON.stringify(jsonData), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                res.status(500).send('Internal Server Error');
                return;
            }

            res.status(200).send('Data deleted successfully');
        });
    });
});

// Ruta para guardar el objeto Bridge en el archivo fabricas.json
app.post('/guardarFabrica', (req, res) => {
    const nuevoBridge = req.body;

    fs.readFile('fabricas.json', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer el archivo JSON');
            return;
        }

        let bridgesExistentes = [];
        try {
            bridgesExistentes = JSON.parse(data);
        } catch (error) {
            res.status(500).send('Error al parsear el archivo JSON existente');
            return;
        }

        bridgesExistentes.push(nuevoBridge); // Agregar el nuevo bridge

        fs.writeFile('fabricas.json', JSON.stringify(bridgesExistentes), (err) => {
            if (err) {
                res.status(500).send('Error al guardar el objeto en el archivo JSON');
            } else {
                res.status(200).send('Objeto guardado correctamente en el archivo JSON');
            }
        });
    });
});

app.get('/obtenerFabricas', (req, res) => {
    fs.readFile('fabricas.json', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer el archivo JSON');
            return;
        }

        let fabricas;
        try {
            fabricas = JSON.parse(data);
        } catch (error) {
            res.status(500).send('Error al parsear el archivo JSON');
            return;
        }

        // Envía los datos JSON como respuesta
        res.json(fabricas);
    });
});

app.delete('/eliminarPlantaPorNombre/:nombrePlanta', (req, res) => {
    const nombrePlanta = req.params.nombrePlanta;

    fs.readFile('fabricas.json', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            res.status(500).send('Error interno del servidor');
            return;
        }

        let fabricas = [];
        try {
            fabricas = JSON.parse(data);
        } catch (error) {
            console.error('Error al parsear el archivo JSON:', error);
            res.status(500).send('Error interno del servidor');
            return;
        }

        // Filtrar las fabricas para eliminar la planta con el nombre proporcionado
        const fabricasActualizadas = fabricas.filter(fabrica => fabrica.planta.nombre !== nombrePlanta);

        // Escribir las fabricas actualizadas de vuelta al archivo JSON
        fs.writeFile('fabricas.json', JSON.stringify(fabricasActualizadas), (err) => {
            if (err) {
                console.error('Error al escribir en el archivo JSON:', err);
                res.status(500).send('Error interno del servidor');
                return;
            }
            
            res.status(200).send('Planta eliminada correctamente por nombre');
        });
    });
});



// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

