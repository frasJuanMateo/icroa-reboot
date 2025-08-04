import React from 'react';
import { useNavigate } from 'react-router-dom';

function Guests() {
  const navigate = useNavigate();

  return (
    <div className="App"> 
        <p>Invitados</p>
        <div className="button-container">
            <button onClick={() => navigate('/')}>Go to Main</button>
            <button onClick={() => navigate('/organizers')}>Go to organizers</button>
            <button onClick={() => navigate('/guests')}>Go to guests</button>
        </div>
    </div>
  );
}

export default Guests;