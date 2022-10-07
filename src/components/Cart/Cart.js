import React from 'react';

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + (product.price)*product.quantity;
        shipping = shipping + product.shipping;
    }
    let tax = Number(((10/100)*total).toFixed(2));
    let grandTotal = (total+shipping+tax)
    return (
        <div>
            <h3>Order Summery</h3>
            <h4>Item added : {quantity}</h4>
            <h4>Total Price : ${total}</h4>
            <h4>Total Shipping Price : ${shipping}</h4>
            <h4>Tax : ${tax}</h4>
            <h4>Grand Total : ${grandTotal}</h4>
        </div>
    );
};

export default Cart;