import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import logo from '../../assets/logo.jpg'

const Header = () => (
    <div className="header">
        <Link className="logo" to='/'>
            <img src={logo}/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/shop">
                Contact
            </Link>
        </div>
    </div>
)

export default Header