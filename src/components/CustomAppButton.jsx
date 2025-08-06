import React from 'react';
import { useNavigate } from 'react-router-dom';

const buttonStyle = {
    backgroundColor: '#2823c2',
    color: 'white',
    borderRadius: '25%',
    border: 'none',
    transition: "all 0.3s ease-in-out",
    transform: 'scale(1.0)',
  };
const CustomAppButton = ({ label, link, icon }) => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate(link)}
                style={buttonStyle}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="96px" viewBox="0 0 24 24" width="96px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/><g><path d={icon}/></g></svg>
            </button>
            <h4>{label}</h4>
        </>
    );
}


export default CustomAppButton;