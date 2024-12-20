import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './Item.jsx'

function App() {
  return (
    <>
    <div className="itemsContainer">
      <Item name="iphone case" imageSrc="amustycow-iphone-case.jpg" price="100"/>
      <Item name="iphone case" imageSrc="amustycow-iphone-case.jpg" price="100"/>
      <Item name="iphone case" imageSrc="amustycow-iphone-case.jpg" price="100"/>
      <Item name="iphone case" imageSrc="amustycow-iphone-case.jpg" price="100"/>
      <Item name="iphone case" imageSrc="amustycow-iphone-case.jpg" price="100"/>
    </div>
   </>
  )
}

export default App
