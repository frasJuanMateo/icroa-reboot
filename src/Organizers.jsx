import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamTable from './components/TeamTable.jsx';
import TeamForm from './components/TeamForm.jsx';


function Organizers() {
  const navigate = useNavigate();

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
      else {return res.json();}
    })
    .then(res => setData(res))
    .catch(error => console.error(error.message));
  });


  return (
    <div className="App"> 
        <p>
          Pagina1
        </p>
        <TeamTable data={data} />
        <TeamForm data={data} />
        <button onClick={() => navigate('/')}>Go to Main</button>
        <button onClick={() => navigate('/organizers')}>Go to organizers</button>
        <button onClick={() => navigate('/guests')}>Go to guests</button>
    </div>  
  );
}

export default Organizers;