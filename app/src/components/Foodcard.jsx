import React from 'react'
import "../styles/Foodcard.css"
import { BASE_URL } from '../App'

const Foodcard = ({name, price, text, image, type}) => {
   
  return (
    <div className='foodcard'>

      <div className='foodcard-image'>
        <img src = {BASE_URL + image} />
      </div>

      <div className='foodcard-info'>
        <h3>{name}</h3>
        <p id="text">{text}</p>
        <p id ="price">{`$ ${price.toFixed(2)}`}</p>
      </div>  
          
    </div>
  )
}

export default Foodcard
