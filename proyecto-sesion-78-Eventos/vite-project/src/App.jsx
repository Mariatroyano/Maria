import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import ayte from '../public/ayte_1.svg'
import './App.css'
import Profile from './assets/components/Profiles.jsx'

const studentsArray = [
  // {
  //   Nombre: 'Nicol',
  //   Imagen: 'https://previews.123rf.com/images/iaroslavtymonko/iaroslavtymonko2304/iaroslavtymonko230400640/202354057-3d-icono-avatar-mujer-de-negocios-ilustraci%C3%B3n-de-ni%C3%B1a-feliz-sonriente-retrato-de-cerca-de-dibujos.jpg',
  //   Direccion: 'lote 68 Barrio Villa Colombia',
  //   Telefono: '3034567534',
  //   Edad: 30
  // },
  // {
  //   Nombre: 'Karina',
  //   Imagen: 'https://img.freepik.com/vector-premium/icono-avatar-mujer-mujer-chica-cartoon_25030-13347.jpg',
  //   Direccion: 'Vrd El Salvador',
  //   Telefono: '3026745678',
  //   Edad: 35
  // },
  // {
  //   Nombre: 'Isabella',
  //   Imagen: 'https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
  //   Direccion: 'Puelenje Alto',
  //   Telefono: '3108907667',
  //   Edad: 10
  // },
  // {
  //   Nombre: 'Natalia',
  //   Imagen: 'https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg',
  //   Direccion: 'El encanto',
  //   Telefono: '3022345676',
  //   Edad: 28
  // },
  // {
  //   Nombre: 'Marcela',
  //   Imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnHbHBzuf2snQua_BZ-_4gqV_O7shpIxd9A&s',
  //   Direccion: 'Bello Horizonte',
  //   Telefono: '3234567897',
  //   Edad: 28
  // },
  // {
  //   Nombre: 'sebastian ',
  //   Imagen: 'https://static.vecteezy.com/system/resources/previews/019/012/852/non_2x/people-avatar-color-symbol-png.png',
  //   Direccion: 'La paz',
  //   Telefono: '3456789867',
  //   Edad: 26
  // }
]
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
    // console.log([...students, { ...persona }])
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
          <button onClick={handleClick}>Agregar</button>
        </div>
      </form>

      <ListPeople>
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
      </ListPeople>
    </>
  )
}





