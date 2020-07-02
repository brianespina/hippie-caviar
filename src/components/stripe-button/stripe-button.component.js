import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100 
    const publishableKey = 'pk_test_t5D5u5EsoArJbicMxgm5PVK300ef2gnqHb'

    onToken = token => {
        console.log(token)
        alert('payment successful')
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Hippe Caviar'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton