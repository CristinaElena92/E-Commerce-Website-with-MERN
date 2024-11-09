import React from 'react'
import '../Newsletter/Newsletter.css'

const Newsletter = () => {
  return (
    <div>
      <section class="newsletter">
        <div class="content">
          <h1>
            Unlock <b>15% </b>off Your First Order!
          </h1>

          <p>
            Subscribe to our newsletter now and
            receive an exclusive 15% discount!
          </p>

          <div>
            <input
              type="email"
              placeholder="Enter your email address"
            />
            <button>Subscribe Now</button>
          </div>
        </div>
      </section>
      <div class="notice">
  <input type="checkbox" />
  <span class="notice__copy">
    I agree to my email address being stored and used to receive the monthly newsletter.
  </span>
</div>

    </div>
  )
}

export default Newsletter
