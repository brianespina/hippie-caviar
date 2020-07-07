import React from 'react'
import { Link } from 'react-router-dom'

const NoAccess = () => {
    return (
        <div>
            <h1>You have no access to view this page, please <Link to='/signin'>log in as admin</Link></h1>
        </div>
    )
}

export default NoAccess