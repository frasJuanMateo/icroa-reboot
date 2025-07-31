import React from 'react';

const TeamForm = ({ data }) => {
    return (
        <form className="simple-form">
            <div className="form-group">
                <label htmlFor="nombre">Nombre del Equipo:</label>
                <input type="text" id="nombre" name="nombre" defaultValue={"a"} />
            </div>
            <div className="form-group">
                <label htmlFor="deporte">Deporte:</label>
                <input type="text" id="deporte" name="deporte"/>
            </div>
            <div className="form-group">
                <label htmlFor="categoria">Categoría:</label>
                <input type="text" id="categoria" name="categoria"/>
            </div>
            <div className="form-group">
                <label htmlFor="puntaje">Puntaje:</label>
                <input type="number" id="puntaje" name="puntaje"/>
            </div>
            <div className="form-group">
                <label htmlFor="responsable_1">Responsable 1:</label>
                <input type="text" id="responsable_1" name="responsable_1"/>
            </div>
        </form>
  );
}


export default TeamForm;