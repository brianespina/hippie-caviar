import React from 'react'

// redux
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
// assets
import './header.styles.scss'
import logo from '../../assets/logo.jpg'

// firebase
import { auth } from '../../firebase/firebase.utils'

// components
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo" to='/'>
            <img src={logo}/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/shop">
                Contact
            </Link>
            {
                currentUser
                ? <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                : <Link to="/signin">Signin / Signup</Link>

            }
            <CartIcon />
        </div>
        { !hidden && <CartDropdown /> }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)