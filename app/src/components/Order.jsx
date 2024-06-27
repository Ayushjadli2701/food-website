import React from 'react'
import "../styles/order.css"
import Foodcard from './Foodcard'

const Order = ({data}) => {
  return (
    
    <div className='order-div'>
      
        <div className='order-now'>
          <h1>ORDER NOW</h1>
        </div>

        <div className='order-buttons'>
          <button className='btn'>ALL</button>
          <button className='btn'>BREAKFAST</button>
          <button className='btn'>LUNCH</button>
          <button className='btn'>DINNER</button>
      </div>
    

      <div className='foodcards'>
          {data?.map((item)=>(<Foodcard  key={item.name} 
                                        name = {item.name}
                                        price = {item.price}
                                        text = {item.text}
                                        image = {item.image}
                                        type = {item.type}
                            />))}
      </div>
    </div>
   
  )
}

export default Order
