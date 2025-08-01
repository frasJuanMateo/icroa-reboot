import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamTable from './components/TeamTable.jsx';
import TeamForm from './components/TeamForm.jsx';
import FondoDeporte from './img/fondo_deporte.png';


function Teams() {
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
    backgroundColor: '#2823c2',
    color: 'white',
    borderRadius: '25%',
    border: 'none',
    transition: "all 0.3s ease-in-out",
    transform: 'scale(1.0)',
  });

  const [data, setData] = useState([])
  const baseUrl = "http://127.0.0.1:5000/equipos_registro";
  /*const [post, setPost] = useState({ name: "", email: "" })
  const [search, setSearch] = useState("");
  const [[min, max], setMaxMin] = useState([0, 4]);
  const [pageCounter, setPageCounter] = useState(1);

  const handleChange = (event) => {
    if (event.target.name == "search") {
      setSearch(event.target.value);
    }
    else {
      const { name, value } = event.target;
      setPost({
        ...post,
        [name]: value
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (post.name !== "" && post.email !== "") {
      axios.post(baseUrl, post);
      setPost({ name: "", email: "" });
    }
  };
  const handleEdit = (event) => {
    const name = window.prompt("Nuevo nombre:")
    const email = window.prompt("Nuevo email:")
    axios.put(`${baseUrl}/${event.target.value}`, { name: name, email: email });
  };
  const handleDelete = (event) => {
    axios.delete(`${baseUrl}/${event.target.value}`);
  };
  const handlePagination = (event) => {
    if (event.target.value == "<" && pageCounter > 1) { setMaxMin([min - 5, max - 5]); setPageCounter(pageCounter - 1) }
    if (event.target.value == ">" && pageCounter < parseFloat(data.length / 5)) { setMaxMin([min + 5, max + 5]); setPageCounter(pageCounter + 1) }
  };*/

  useEffect(() => {
    fetch(baseUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error(`${res.status}`);
        }
        else { return res.json(); }
      })
      .then(res => setData(res))
      .catch(error => console.error(error.message));
  });


  return (
    <section>
      <title>Equipos</title>
      <div class="container" style={sectionStyle}>

        {
        /*<button onClick={() => navigate('/')}
          style={buttonStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}>
          
          <svg xmlns="http://www.w3.org/2000/svg" height="96px" viewBox="0 0 24 24" width="96px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </button>
        <h4>HOME</h4>
        <button onClick={() => navigate('/teams')}
          style={buttonStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}>
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="96px" viewBox="0 0 24 24" width="96px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/><g><path d="M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,18H6l0-1.61c0-1.18,0.68-2.26,1.76-2.73 C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1 C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85 C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M12,6c1.66,0,3,1.34,3,3 c0,1.66-1.34,3-3,3s-3-1.34-3-3C9,7.34,10.34,6,12,6z"/></g></svg>
        </button>
        <h4>EQUIPOS</h4>*/
        }
        <TeamTable data={data} />
        <TeamForm data={data} />
      </div>
    </section>
  );
}

export default Teams;