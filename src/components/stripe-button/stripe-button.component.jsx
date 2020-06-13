import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price;
    const publishableKey = 'pk_test_51GtGXSGW7kEkFvpaVySBkZXx7UHOonP4KDtK2fuUF6DIBWU7baBoeWH3LfnxNRXHQSsnVMULz8WsP3b4ji8ePzwE00Q5ADvxxQ';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }


    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${priceForStripe}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;