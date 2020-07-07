import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './admin-bar.style.scss'

const AdminBar = ({ user }) => {
    const { isAdmin, displayName } = user
    return(
        <Fragment>
            {isAdmin &&
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
                        Hello! { displayName }
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default AdminBar