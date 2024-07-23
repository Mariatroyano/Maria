import { useState } from 'react'
import './App.css'

const recipes = [ {
  title: 'arroz con pollo',
  descripcion : 'Tomar 500 ml de agua y 50 gr de sal y poner a fuego lento ',
  ingredients: [
    {
      name:'chiken', quantity: 300, unit: 'gs'
    },
    {
        name:'sal', quantity: 50, unit: 'gs'
    }
  ]
}]
const  loading = true;
const  error = false 

function App() {

//  renderizado con la setencia if
  if( error){
    return <p> Upps! Ha ocurrido un error </p>
  }
 

  return (
    <>
    <header></header>
    
      <h1>Mi recetario</h1>
      <main className='container-main'>

      <section className='flex-1'> 
        <h2>Creador de recetario</h2>
        < RecipeCreator/>
      </section>

      <section className='flex-1'>
        <h2>Listado de recetas</h2>
        {/* renderizado consicional usando add && */}
        { recipes.length <= 0 && 'Aun no hay recetas'}

        {/* renderizado condicional utilzando operador ternario */}
        {loading ? <p> Cargando...</p>: null}
     
             {recipes.map  }
      
      </section>

    </main>
    <footer></footer>
      
    </>
  )
}

export default App
