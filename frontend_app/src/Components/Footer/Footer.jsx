import React from 'react'
import '../Footer/Footer.css'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-link">
        <Link to="/">Company</Link>
        <Link to="/">Products</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        
      </div>
      <div className="footer-media">
        <FaFacebook size={32}  />
        <FaInstagram size={32} />
        <FaTwitter size={32} />
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>

      </div>
    </div>
  )
}

export default Footer
