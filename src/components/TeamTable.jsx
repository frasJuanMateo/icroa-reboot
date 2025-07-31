import React from 'react';

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

const SimpleTable = ({ data }) => {
    return (
        <table class="tabla">
            <thead>
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

export default SimpleTable;