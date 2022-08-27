import React from 'react'
import trollface from '../assets/Troll Face.png'

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <img src={trollface} alt="Troll Face" />
      <h3>Meme Generator</h3>
      <p>React course - Project 3</p>
    </nav>
  )
}

export default Navbar
