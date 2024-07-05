import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import ayte from '../public/ayte_1.svg'
import './App.css'
import Profiles from './components/Profiles.jsx'


  const sebastian = {
    nombre: 'Maria Del Mar',
    apellido: 'Troyano',
    edad: '21'
  }

  const studenst = [
    {
      Nombre: 'Nicol',
      Imagen: 'https://previews.123rf.com/images/iaroslavtymonko/iaroslavtymonko2304/iaroslavtymonko230400640/202354057-3d-icono-avatar-mujer-de-negocios-ilustraci%C3%B3n-de-ni%C3%B1a-feliz-sonriente-retrato-de-cerca-de-dibujos.jpg',
      Direccion: 'lote 68 Barrio Villa Colombia',
      Telefono: '3034567534',
      Edad: 30
    },
    {
      Nombre: 'Karina',
      Imagen: 'https://img.freepik.com/vector-premium/icono-avatar-mujer-mujer-chica-cartoon_25030-13347.jpg',
      Direccion: 'Vrd El Salvador',
      Telefono: '3026745678',
      Edad: 35
    },
    {
      Nombre: 'Isabella',
      Imagen: 'https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
      Direccion: 'Puelenje Alto',
      Telefono: '3108907667',
      Edad: 10
    },
    {
      Nombre: 'Natalia',
      Imagen: 'https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg',
      Direccion: 'El encanto',
      Telefono: '3022345676',
      Edad: 28
    },
    {
      Nombre: 'Marcela',
      Imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnHbHBzuf2snQua_BZ-_4gqV_O7shpIxd9A&s',
      Direccion: 'Bello Horizonte',
      Telefono: '3234567897',
      Edad: 28
    },
    {
      Nombre: 'Fabian',
      Imagen: 'https://static.vecteezy.com/system/resources/previews/019/012/852/non_2x/people-avatar-color-symbol-png.png',
      Direccion: 'La paz',
      Telefono: '3456789867',
      Edad: 26
    }
  ]

  function App() {
    const [count, setCount] = useState(0)
    const[persona,setPersona]= useState("maria")

    function getRandomPerson(customArray){
      const randomIndex = Math.floor(Math.random() * customArray.length)
      return customArray[randomIndex].Nombre
      }


  return (
    <>
      <div>
        {
          studenst.map((styde) => <Profiles Nombre={styde.Nombre} Imagen={styde.Imagen} Telefono={styde.Telefono} Direccion={styde.Direccion} Edad={styde.Edad} />)
        }
        <h2>Nombre:{sebastian.nombre}</h2>
        <p>Apellido:{sebastian.apellido}</p>
        <p>Edad:{sebastian.edad}</p>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="#" target="_blank">
          <img src={ayte} className="logo ayte" alt="ayte logo" />
        </a>

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          incrementar
        </button>
        <p>
          EL valor del contador es: {count}
        </p>
      </div>
      <div>
        <button onClick={() => setCount((count) => count + -1)}>
          Decremetar
        </button>
      </div>
      <div>
        <button onClick={() => setCount((count) => count - count)}>
          Restablecer
        </button>
      </div>
      <div>
        <button onClick={() =>setPersona (getRandomPerson(studenst))}>
          cambiar invitao
        </button>
      </div>
      <p>
          EL valor del contador es: {persona}
        </p>
    </>

  )
}


export default App


