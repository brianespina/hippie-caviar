import React from 'react'

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

// assets
import './header.styles.scss'
import logo from '../../assets/logo.jpg'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv, LogoImage } from './header.styles'

// firebase
import { auth } from '../../firebase/firebase.utils'

// components
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer className="logo" to='/'>
            <LogoImage src={logo}/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                Shop
            </OptionLink>
            <OptionLink to="/shop">
                Contact
            </OptionLink>
            {
                currentUser
                ? <OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>
                : <OptionLink to="/signin">Signin / Signup</OptionLink>

            }
            <CartIcon />
        </OptionsContainer>
        { !hidden && <CartDropdown /> }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)