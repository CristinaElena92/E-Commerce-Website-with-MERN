import React from 'react'
import '../Newsletter/Newsletter.css'


const Newsletter = () => {
    return (
      <div className="">
        <h1>Unlock 10% Off Your First Order!</h1>
        <p>
          Subscribe to our newsletter now and
          receive an exclusive 10% discount!
        </p>
        <div>
          <input
            type="email"
            placeholder="Your E-mail"
          />
          <button>Subscribe Now</button>
        </div>
      </div>
    )
  }
  
  export default Newsletter



