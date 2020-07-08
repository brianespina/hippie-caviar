import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import IsAdmin from '../is-admin/is-admin.component'

import './admin-bar.style.scss'

const AdminBar = ({ user }) => {
    return(
        <Fragment>
            <div className="admin-bar">
                    <div className="admin-bar__dashboard-link">
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
                    <ul className="admin-bar__links">
                        <li>
                            <a>Products</a>
                        </li>
                        <li>
                            <a>Orders</a>
                        </li>
                        <li>
                            <a>Users</a>
                        </li>
                    </ul>
                    <div className="admin-bar__logged-in-as">
                        Hello! { user && user.displayName }
                    </div>
                </div>
        </Fragment>
    )
}

export default IsAdmin(AdminBar)