import React from 'react'
import "../styles/Navbar.css"


const  Navbar = ({searchFood}) => {
  return (
    <div className='uppernav'>
      <div className='logo-div'>
        <img src="/FoodyZone.svg" alt="logo"/>
      </div>
      <div className='nav-options'>
        <a className='nav-item' href = "/home">Home</a>
        <a className='nav-item' href = "/home">About</a>
        <a className='nav-item' href = "/home">Our Menu</a>
        <a className='nav-item' href = "/home">Reviews</a>
        <a className='nav-item' href = "/home">Contact us</a>
      </div>
      <div className='search-bar'>
        <input type = "input" placeholder='Search' onChange={searchFood}></input>
      </div>
    </div>
  )
}

export default  Navbar
