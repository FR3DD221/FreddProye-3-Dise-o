import React, { useState, useEffect } from 'react';
import '../estilos/modal.css'
import { useNavigate  } from 'react-router-dom';


const Modal = ({ isOpen, onClose, onSave }) => {
    const [nombreObjeto, setNombreObjeto] = useState('');
    const navigate  = useNavigate (); 

    const handleChange = (event) => {
        setNombreObjeto(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(nombreObjeto);
        onClose();
        navigate('/homeCarros'); 
    };


    useEffect(() => {
        if (isOpen) {
            setNombreObjeto('');
        }
    }, [isOpen]);

    return (
        isOpen && (
            <div className="modal">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <label className='labelModal'>
                            Nombre del prototipo:
                            <input type="text" value={nombreObjeto} onChange={handleChange} />
                        </label>
                        <button className='buttonGuar' disabled={!nombreObjeto} type="submit">GUARDAR</button>
                        <button className='buttonCancel' onClick={onClose}>CANCELAR</button>
                    </form>
                </div>
            </div>
        )
    );
};

export default Modal;