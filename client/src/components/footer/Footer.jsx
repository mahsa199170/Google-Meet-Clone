import React from 'react'
import "./footer.css"

import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Easy Meet</a>
      <div className='footer__socials'>
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
      </div>
      <div className='footer__copyright'>
      <small>&copy; Easy Meet. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer