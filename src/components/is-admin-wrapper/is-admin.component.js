import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import NoAccess from '../../pages/no-access/no-access.component'

import { selectCurrentUser } from '../../redux/user/user.selector'

const IsAdmin = ({ children, currentUser, msg }) => {
    console.log('redirect',msg)
    return(
        <Fragment>
            { currentUser && currentUser.isAdmin && children }
            {msg && <NoAccess />}
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(IsAdmin)