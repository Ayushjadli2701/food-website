import React from 'react'
import "../styles/body.css"

const Body = () => {
     
  return (
    <div className='website-body'>
      <div className='body-img'>
          <img loading="lazy" src="https://s7d1.scene7.com/is/image/mcdonalds/1PUB_bestburger_trendingnow:1-column-desktop?resmode=sharp2" class="cmp-image__image" itemprop="contentUrl" data-cmp-hook-image="image" alt=""></img>
      </div>
      <div className='body-text'>
        <h1>Place your order.</h1>
        <p>You’re gonna love the hotter, juicier, tastier upgrades we’ve made to burgers like our Cheeseburger and Double Cheeseburger.* From patties grilled with onions and perfectly melted cheese to new soft, pillowy buns—these are our best burgers yet. Ask the Hamburgar, he can’t keep his hands off of ‘em. Robble, robble.</p>
      </div>
    </div>
  )
}

export default Body
