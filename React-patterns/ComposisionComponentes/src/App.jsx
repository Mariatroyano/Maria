import { Component, useState } from 'react'
import './App.css'
import ItemCard from './components/ItemCard/itemCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ItemCard/>
      </div>
    </>
  )
}

export default App
