import React from 'react'
import './styles.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOut } from '../../firebase/utils'


const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

function Header(props){
    const { currentUser } = useSelector(mapState)

    return(
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        Logo
                    </Link>
                </div>
                <div className="call-to-action">
                    {currentUser && 
                        <ul>
                            <li>
                                <Link to='/dashboard'>
                                    Dashboard
                                </Link>
                            </li>
                            <li onClick={signOut}>
                                Welcome! { currentUser.displayName } | Log Out
                            </li>
                        </ul>
                    }
                    {!currentUser &&
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