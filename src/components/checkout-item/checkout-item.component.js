import React from 'react'

//redux
import { connect } from 'react-redux'
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions'

import './checkout-item.style.scss'

const CheckoutItem = ({ cartItem, clearItemFromCart, removeItem, addItem}) => {
    const {name, imageUrl, price, quantity, id} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={ imageUrl } alt="item"/>
            </div>
            <span className="name">{ name }</span>
            <span className="quantity">
                <span className="arrow" onClick={()=> removeItem(cartItem)}>&#10094; </span>
                    <span className="value">{ quantity }</span>
                <span className="arrow" onClick={()=> addItem(cartItem)}> &#10095;</span>
            </span>
            <span className="price">{ price }</span>
            <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
    
}


const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)