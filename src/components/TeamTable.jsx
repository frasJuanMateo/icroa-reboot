import React from 'react';



const tableStyle = {
    border: "4px solid #ddd !important",
    backgroundColor: "#2823c2",
    color: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    textAlign: "center",
    margin: "20px auto",
    padding: "20px",
    borderCollapse: "collapse",
    width: "80%",
    minWidth: "600px",
    tableLayout: "fixed",
    width: "80%",
    minWidth: "1000px",
    margin: "0 auto",
    borderTop: "1px solid #999",
    borderBottom: "1px solid #999",
};


let equipos = [
    {
        id: 1,
        nombre: 'Equipo A',
        deporte: 'Fútbol',
        categoria: 'Adultos',
        puntaje: 10,
        responsable_1: 'Juan Pérez',
        invitados: [
            { dni: '12345678', nombre_apellido: 'Carlos López', dieta: 'Vegetariana' },
            { dni: '87654321', nombre_apellido: 'Ana García', dieta: 'Sin gluten' }
        ]
    }];

const TeamTable = ({ data }) => {
    return (
        <table class="tabla" style={tableStyle}>
            
            <thead>
                <caption style={{textAlign:"center", justifyContent:"center"}}>Equipos Registrados</caption>
                <tr>
                    <th>ID</th>
                    <th>Nombre del Equipo</th>
                    <th>Deporte</th>
                    <th>Categoría</th>
                    <th>Puntaje</th>
                    <th>Responsable</th>
                </tr>
            </thead>
            <tbody>
                {data.map((equipo, index) => (
                    <>
                    <tr>
                        <td>{equipo.id}</td>
                        <td>{equipo.nombre}</td>
                        <td>{equipo.deporte}</td>
                        <td>{equipo.categoria}</td>
                        <td>{equipo.puntaje}</td>
                        <td>{equipo.responsable_1 || 'Sin responsable'}</td>
                    </tr><tr>
                            <td colspan="5">
                                {equipo.invitados && equipo.invitados.length ? (
                                    <table>
                                    <thead>
                                        <tr>
                                            <th>DNI</th>
                                            <th>Nombre</th>
                                            <th>Dieta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {equipo.invitados.map((inv, index) => 
                                        <tr>
                                            <td>{inv.dni}</td>
                                            <td>{inv.nombre_apellido}</td>
                                            <td>{inv.dieta}</td>
                                        </tr>)}
                                    </tbody>
                                </table>)  : (<></>)}
                            </td>
                        </tr>
                        </>))}
            </tbody>
        </table>
    );
};

export default TeamTable;