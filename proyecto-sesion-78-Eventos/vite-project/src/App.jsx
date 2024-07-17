import { useState } from 'react'
import './App.css'
import Profile from './assets/components/Profiles.jsx'
import ListPeople from '../src/assets/ListPeople.jsx'; // Importa el componente ListPeople


const studentsArray = [
  
]
function getRandomPerson(customArray){
  const randomIndex = Math.floor(Math.random() * customArray.length)
  return customArray[randomIndex]
}
export default function App() {
  const [persona, setPersona] = useState({})
  const [students, setStudents] = useState(studentsArray);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona({ ...persona, [name]: value })
  }

  const handleClick = (e) => {
    e.preventDefault()
    setStudents([...students, { ...persona }])
     console.log([...students, { ...persona }])
  }

  return (
    <>
      <h1>Manejo de eventos</h1>
      <form>
        
        <input onChange={handleChange} type='text' name="Nombre" placeholder='Nombre Usuario'></input>
        <input onChange={handleChange} type='text' name="Telefono" placeholder='Telefono'></input>
        <input onChange={handleChange} type='text' name="Edad" placeholder='Edad'></input>
        <input onChange={handleChange} type='text' name="Imagen" placeholder='Imagen'></input>
        <div>
        <button type='button' onClick={handleClick}>Agregar</button>
      
        </div>
      </form>

      <ListPeople>
        {
          studentsArray.map((student) => <Profile 
            Nombre={student.Nombre}
            Imagen={student.Imagen}
            Telefono={student.Telefono}
            Edad={student.Edad}
            Direccion={student.Direccion}
          />)
        }
      </ListPeople>
    </>
  )
}





