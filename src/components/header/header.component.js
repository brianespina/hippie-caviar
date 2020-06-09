import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import logo from '../../assets/logo.jpg'
import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser }) => (
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
            {
                currentUser
                ? <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                : <Link to="/signin">Signin / Signup</Link>

            }
        </div>
    </div>
)

export default Header