import React from 'react'
import '../Offers/Offers.css'
import exclusive_image from '../Assets/exclusive_image.jpg'


const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers</h1>
        <p>Best Sellers</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} width={400} alt="" />
      </div>
    </div>
  )
}

export default Offers
