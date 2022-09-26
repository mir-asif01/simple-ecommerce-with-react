import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, seller, price, ratings, img } = props.product
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="info">
                <h5>{name}</h5>
                <p>Price : ${price}</p>
                <p>Seller : {seller}</p>
                <p>Ratings : {ratings} Stars</p>
            </div>
            <button onClick={()=> props.handleAddToCart(props.product)} className='cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;