import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SimpleTable from './components/SimpleTable.jsx';


function Organizers() {
  const navigate = useNavigate();

  return (
    <div className="App"> 
        <p>
          Pagina1
        </p>
        <SimpleTable data={data} />
        <button onClick={() => navigate('/')}>Go to Main</button>
        <button onClick={() => navigate('/organizers')}>Go to organizers</button>
        <button onClick={() => navigate('/guests')}>Go to guests</button>
    </div>  
  );
}

export default Organizers;