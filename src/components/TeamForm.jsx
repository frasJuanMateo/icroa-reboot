import React from 'react';
import axios from 'axios';
import { useState } from 'react';


const TeamForm = ({ data }) => {
    const baseUrl = "http://127.0.0.1:5000/subir_equipo";
    const [equipo, setEquipo] = useState({
        nombre: "",
        categoria: "",
        deporte: "",
        puntaje: 0,
        responsable_1_id: null,
        responsable_2_id: null
    });

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        setEquipo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        //event.preventDefault();
        try {axios.post(baseUrl, equipo)
            .then(response => {
                console.log("Equipo registrado:", response.data);
                setEquipo({
                    nombre: "",
                    categoria: "",
                    deporte: "",
                    puntaje: 0,
                    responsable_1_id: null,
                    responsable_2_id: null
                });
            })
            } catch (error) {console.error("Error al enviar datos:", error);}
    };  

    
    return (
        <form className="simple-form" onChange={handleChange} onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nombre">Nombre del Equipo:</label>
                <input type="text" id="nombre" name="nombre" />
            </div>
            <div className="form-group">
                <label htmlFor="deporte">Deporte:</label>
                <input type="text" id="deporte" name="deporte" />
            </div>
            <div className="form-group">
                <label htmlFor="categoria">Categoría:</label>
                <input type="text" id="categoria" name="categoria" />
            </div>
            <div className="form-group">
                <label htmlFor="puntaje">Puntaje:</label>
                <input type="number" id="puntaje" name="puntaje" />
            </div>
            <div className="form-group">
                <label htmlFor="responsable_1">Responsable 1:</label>
                <input type="number" id="responsable_1" name="responsable_1" />
            </div>
            <div className="form-group">
                <label htmlFor="responsable_2">Responsable 2:</label>
                <input type="number" id="responsable_2" name="responsable_2" />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}


export default TeamForm;