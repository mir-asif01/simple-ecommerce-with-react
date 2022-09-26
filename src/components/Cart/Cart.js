import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Order Summery</h3>
            <h4>Item added : {cart.length}</h4>
            <h4>Total Price : 0</h4>
        </div>
    );
};

export default Cart;