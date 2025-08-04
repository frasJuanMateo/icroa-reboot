import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FondoDeporte from './img/fondo_deporte.png';

function Main() {
  const navigate = useNavigate();
  const [sectionStyle, setSectionStyle] = useState({
    backgroundImage: `url(${FondoDeporte})`,
    color: 'white',
    backgroundSize: "cover",  
    backgroundrepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  });

  const [buttonStyle, setButtonStyle] = useState({ 
    backgroundColor:'#2823c2', 
    color: 'white', 
    borderRadius: '25%', 
    border: 'none',
    transition: "all 0.3s ease-in-out",
    transform: 'scale(1.0)',
  });

  return (
    <section>
      <title>ICROA</title>
      <div class="container" style={sectionStyle}>
        <button onClick={() => navigate('/organizers')}
          style={buttonStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}>
          <svg xmlns="http://www.w3.org/2000/svg" height="96px" viewBox="0 -960 960 960" width="96px" fill="#FFFFFF"><path d="M191-124v-73h579v73H191Zm-.66-157-55.42-350q-2.92 2-6.35 2.5-3.43.5-7.57.5-24.5 0-40.75-16.56T64-685.06Q64-709 80.56-726q16.56-17 40.5-17T162-725.96q17 17.04 17 40.96 0 9-3.1 18.12-3.1 9.12-7.9 14.88l145 65 144-200q-15.08-5.65-24.54-19.82Q423-821 423-838.8q0-24 16.41-40.6t40.5-16.6Q504-896 521-879.4q17 16.6 17 40.6 0 17.8-10.24 31.86Q517.52-792.88 503-786l145 199 145-65q-4.8-5.76-7.9-14.88Q782-676 782-685q0-23.92 16.58-40.96Q815.17-743 838.5-743q23.92 0 40.71 17.06t16.79 41q0 23.94-16.75 40.44Q862.5-628 839-628q-3 0-6.5-1t-6.42-3l-55.83 351H190.34Z" /></svg>
        </button>
        <h4>ORGANIZADORES</h4>
        <button onClick={() => navigate('/guests')}
          style={buttonStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}>
          <svg xmlns="http://www.w3.org/2000/svg" height="96px" viewBox="0 -960 960 960" width="96px" fill="#FFFFFF"><path d="M480-487q-71.46 0-116.23-44.77Q319-576.54 319-648q0-71.46 44.77-116.23Q408.54-809 480-809q71.46 0 116.23 44.77Q641-719.46 641-648q0 71.46-44.77 116.23Q551.46-487 480-487ZM145-130v-109q0-41 20.09-70.38Q185.19-338.75 217-354q69-32 133.45-47.5 64.46-15.5 129.5-15.5Q545-417 609-401q64 16 133 47 32.81 15.25 52.91 44.62Q815-280 815-239v109H145Z" /></svg>
        </button>
        <h4>INVITADOS</h4>
      </div>
    </section>
  );
}

export default Main;