import React from 'react';

/*const SimpleTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};*/

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
                {equipos.map((equipo, index) => (
                    <>
                    <tr>
                        <td>{equipo.id}</td>
                        <td>{equipo.nombre}</td>
                        <td>{equipo.deporte}</td>
                        <td>{equipo.categoria}</td>
                        <td>{equipo.puntaje}</td>
                        <td>{equipo.responsable_1 || 'Sin responsable'}</td>
                    </tr>{/*<tr>
                            <td colspan="5">
                                <table v-if="equipo.invitados && equipo.invitados.length">
                                    <thead>
                                        <tr>
                                            <th>DNI</th>
                                            <th>Nombre</th>
                                            <th>Dieta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="inv in equipo.invitados">
                                            <td>{inv.dni}</td>
                                            <td>{inv.nombre_apellido}</td>
                                            <td>{inv.dieta}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>*/}
                        </>))}
            </tbody>
        </table>
    );
};

export default SimpleTable;