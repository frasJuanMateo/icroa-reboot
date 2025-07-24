
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <div className="App" style={{
      textAlign: "center",
      backgroundColor: "#282c34",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white"
      }}> 
        <p>
          Aloh
        </p>
        <button onClick={() => navigate('/page1')}>Go to Page 1</button>
        <button onClick={() => navigate('/page2')}>Go to Page 2</button>
    </div>
  );
}

export default Main;