import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import { signOut } from '../../firebase/utils'

function Header(props){
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        Logo
                    </Link>
                </div>
                <div className="call-to-action">
                    {props.user && 
                        <ul>
                            <li onClick={signOut}>
                                Welcome! { props.user.displayName } | Log Out
                            </li>
                        </ul>
                    }
                    {!props.user &&
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
                    }
                    
                </div>
            </div>
        </header>
    )
}

export default Header