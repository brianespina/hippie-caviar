import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

const Header = props => {
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        Logo
                    </Link>
                </div>
                <div className="call-to-action">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Registration
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header