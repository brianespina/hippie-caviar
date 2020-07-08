import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selector'
import NoAccess from '../../pages/no-access/no-access.component'

const IsAdmin = (WrappedComponent, page) => {
    const ProtectedComponent = ({ currentUser }) => {
        return(
            <Fragment>
                {currentUser && currentUser.isAdmin ?
                    <WrappedComponent user={currentUser}/> : page && <NoAccess />}
            </Fragment>
        )
    }
    const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser
    })
    return connect(mapStateToProps)(ProtectedComponent)
}

export default IsAdmin