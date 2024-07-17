import { useState } from 'react'
import './App.css'
import Profile from './assets/components/Profiles.jsx'
 import ListPeople from '../src/assets/ListPeople.jsx'; // Importa el componente ListPeople

const studentsArray = [];

function App() {
  const [persona, setPersona] = useState({})
  const [students, setStudents] = useState(studentsArray);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona({ ...persona, [name]: value });
  };8.
  const handleClick = (e) => {
    e.preventDefault();
    setStudents([...students, { ...persona }]);
  };

  return (
    <>
      <h1>Manejo de eventos</h1>
       
      <form action=''>

        <input onChange={handleChange} type='text' name="Nombre" placeholder='Nombre Usuario' />
        <input onChange={handleChange} type='text' name="Telefono" placeholder='Telefono' />
        <input onChange={handleChange} type='text' name="Edad" placeholder='Edad' />
        <input onChange={handleChange} type='text' name="Imagen" placeholder='Imagen' />
        <input onChange={handleChange} type='text' name="Direccion" placeholder='Direccion' />
        <div>
          <button onClick={handleClick}>Agregar</button>

        </div>
      </form>
      <div>
        {
          students.map((student, index) => <Profile
            key={index}
            Nombre={student.Nombre}
            Imagen={student.Imagen}
            Telefono={student.Telefono}
            Edad={student.Edad}
            Direccion={student.Direccion}
          />)
        }
      </div>
    </>
  );
}

export default App;



