import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from './../../firebase/utils'

class Signout extends React.Component{
    render(){
        return(
            <Link conClick={signOut}>
                Sign out
            </Link>
        )
    }
}

export default Signout