const express = require('express');
const fs = require('fs');
const cors = require('cors'); 

const app = express();
const PORT = 3000;


app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3001' 
}));


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

        res.json(objetos);
    });
});


app.delete('/eliminar/:key', (req, res) => {
    const { key } = req.params;

    fs.readFile('disenos.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }


        let jsonData = {};
        try {
            jsonData = JSON.parse(data);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
            return;
        }


        if (!jsonData.hasOwnProperty(key)) {
            res.status(404).send('Data with the provided key not found');
            return;
        }

        delete jsonData[key];

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

        const fabricasActualizadas = fabricas.filter(fabrica => fabrica.planta.nombre !== nombrePlanta);


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

