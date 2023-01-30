import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import { CiDark, CiLight } from 'react-icons/ci'

const Navbar = ({ darkMode, setDarkMode }) => {
    return (
        <nav>
            <div className='app__navbar'>
                <div className='logo'>
                    <NavLink to='/' className="nav__link">Shivesh</NavLink>
                </div>
                <div className='app__navbar-links'>
                    <NavLink to='/home' className="nav__link">Home</NavLink>
                    <NavLink to='/contact' className="nav__link contact">Contact</NavLink>
                    <span>
                        {darkMode ?
                            <CiLight className='nav__icon' onClick={() => setDarkMode(false)} />
                            :
                            <CiDark className='nav__icon' onClick={() => setDarkMode(true)} />
                        }
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar