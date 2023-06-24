import React from 'react'
import style from '../css/style.module.css'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
         <nav>
          <div>
            <img src={logo} alt="img"  className={style.logo}/>
          </div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/About">ABOUT</Link></li>
                <li><Link to="/Skills">SKILLS</Link></li>
                <li><Link to="/Projects">PROJECTS</Link></li>
                <li><Link to="/Contacts">CONTACTS</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar