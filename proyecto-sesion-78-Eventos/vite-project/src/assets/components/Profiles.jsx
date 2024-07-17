import './Profiles.css'

function Profiles  ({ Nombre, Imagen, Telefono, Edad, Direccion })  {
  return (
      <div className='card-person'>
          <img
          className='card-imagen'
              src={Imagen}
              alt={Nombre}
          />
          
          <div className='card-content'>
              <h3>{Nombre}</h3>
              <p>Telefono:{Telefono}</p>
              <p>Edad:{Edad}</p>
              <p> Direccion:{ Direccion}</p>
          </div>
      </div>
  )
}
export default Profiles

