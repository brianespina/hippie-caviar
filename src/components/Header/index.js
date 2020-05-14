import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/utils'

const Header = props => {
    const { currentUser } = props
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        Logo
                    </Link>
                </div>
                <div className="call-to-action">
                    {currentUser && (
                        <p onClick={()=> auth.signOut()}>
                            Log out
                        </p>
                        
                    )}

                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration">
                                    Registration 
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    Sign In
                                </Link>
                            </li>
                        </ul>
                    )}

                </div>
            </div>
        </header>
    )
}

export default Header