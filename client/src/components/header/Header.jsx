import React from 'react'
import './header.css'
import LOGO from '../../assets/logo.png'




// .header__container When naming a class and using double underscore "__" as a 
// separator between words, it is a part of the BEM (Block Element Modifier) naming convention 
// BEM is a methodology for organizing and naming CSS classes in a structured
//  and predictable way. It helps developers to create more modular, reusable,
//   and maintainable code by using a consistent naming convention that makes it 
//   easy to understand the purpose and relationship of each class.

const Header = () => {
  return (
    <header>
      <div className= "header__container">
        <div className="logo">
          {/* <img src = {LOGO} alt="me"></img> */}
        </div>
        <div>
          <h1> Easy Meet</h1>
          <h3> enjoy the moments</h3>
        </div>
        
      </div>


    </header>
  )
}

export default Header