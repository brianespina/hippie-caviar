import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import {selectCurrentUser} from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'

import SignIn from '../../components/sign-in/sign-in.component'

const Dashboard = () => {
    return(
        <Fragment>
            <h1>Dashboard</h1>
         </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
    

export default connect(mapStateToProps)(Dashboard)