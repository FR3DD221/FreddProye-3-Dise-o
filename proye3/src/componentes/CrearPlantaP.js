import React, {useState} from 'react';
import Boton from './Boton';
import Header from './Header';
import Label from './Label';
import Input from './Input';
import '../estilos/input.css';
import { useNavigate } from 'react-router-dom';
import Planta from '../bridge/Planta';
import Parqueo from '../bridge/Parqueo';
import Bridge from '../bridge/Bridge';



const CrearPlantaP = () => {
    const navigate = useNavigate(); 
    const handleNavigation = (path) => {
        navigate(path); 
    };

    const [nombreP, setNombreP] = useState('');
    const [provincia, setProvincia] = useState('');
    const [canton, setCanton] = useState('');
    const [distrito, setDistrito] = useState('');
    const [senas, setSenas] = useState('');
    const [nombrePer, setNombrePer] = useState('');
    const [telefonos, setTelefonos] = useState('');

    const handleCrear = () => {
        const planta1 = new Planta(nombreP, provincia, canton, distrito, senas, nombrePer, telefonos);
        const parqueoA = new Parqueo("A");
        const parqueoB = new Parqueo("B");
        const parqueoC = new Parqueo("C");
        const parqueoD = new Parqueo("D");
        const parqueoE = new Parqueo("E");
        const bridge1 = new Bridge(planta1);
        bridge1.anadirParqueos(parqueoA);
        bridge1.anadirParqueos(parqueoB);
        bridge1.anadirParqueos(parqueoC);
        bridge1.anadirParqueos(parqueoD);
        bridge1.anadirParqueos(parqueoE);
        const objetoEnviar = bridge1;

        // Realizar la solicitud POST al servidor
        fetch('http://localhost:3000/guardarFabrica', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objetoEnviar)
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


    return (
        <div className='contenedorForms'>
            <Header estilo="main-header2">
                <Boton onClick={() => handleNavigation("/homePlantas")} texto="VOLVER" estilo="button_slide slide_left" />
                <Label texto="INICIO DE SESION" estilo="labelUser"></Label>
            </Header>
            <div className='containerForm'>
                <form onSubmit={handleCrear} className='containerForm'>
                    <div >
                        <Input texto="Escribale el nombre" funcion={(event) => setNombreP(event.target.value)}  value="" estilo="inputUser2"  ></Input>
                    </div>
                    <div >
                        <Input texto="Provincia" funcion={(event) => setProvincia(event.target.value)} value="" estilo="inputUser2"  ></Input>
                    </div>
                    <div >
                        <Input texto="Canton" funcion={(event) => setCanton(event.target.value)} value="" estilo="inputUser2" ></Input>
                    </div>
                    <div >
                        <Input texto="Distrito" funcion={(event) => setDistrito(event.target.value)} estilo="inputUser2" ></Input>
                    </div>
                    <div >
                        <Input texto="Senas" funcion={(event) => setSenas(event.target.value)} value="" estilo="inputUser2"  ></Input>
                    </div>
                    <div >
                        <Input texto="Nombre de la persona" funcion={(event) => setNombrePer(event.target.value)} value="" estilo="inputUser2" ></Input>
                    </div>
                    <div >
                        <Input texto="Telefono" funcion={(event) => setTelefonos(event.target.value)} typeInp="number" value="" estilo="inputUser2" ></Input>
                    </div>
                    <Boton texto="CREAR" type="submit" estilo="button_submit submitSlide"></Boton>
                </form>
            </div>
        </div>
    );
};

export default CrearPlantaP;