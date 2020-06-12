import React from 'react'

//redux
import { connect } from 'react-redux'
import { clearItemFromCart } from '../../redux/cart/cart.actions'

import './checkout-item.style.scss'

const CheckoutItem = ({ cartItem, clearItemFromCart}) => {
    const {name, imageUrl, price, quantity, id} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={ imageUrl } alt="item"/>
            </div>
            <span className="name">{ name }</span>
            <span className="quantity">{ quantity }</span>
            <span className="price">{ price }</span>
            <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
    
}


const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)