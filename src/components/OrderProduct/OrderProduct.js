import React from 'react';
import './OrderProduct.css'

const OrderProduct = ({product,handleDeleteBtn}) => {
    const {name,price,shipping,img,id,quantity} = product;
    // const 
    return (
        <div className='order-product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>Name : {name}</p>
                <p>Price : ${price}</p>
                <p>Shipping : ${shipping}</p>
                <p>Quantity : {quantity}</p>
            </div>
            <button onClick={()=>handleDeleteBtn(id)} className='btn-d'>❌</button>
        </div>
    );
};

export default OrderProduct;