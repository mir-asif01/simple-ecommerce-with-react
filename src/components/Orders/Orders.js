import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb,getCartFromDb,removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderProduct from '../OrderProduct/OrderProduct';

const Orders = () => {
    const {products,previousCart} = useLoaderData();
    const [cart,setCart] = useState(previousCart);

    const handleDeleteBtn =(id)=>{
        console.log(id);
        const filteredCart = cart.filter(product=>product.id !== id);
        setCart(filteredCart);
        removeFromDb(id);
    }

    return (
        <div>
            <h4>This is orders page</h4>
            <div className='shop-container'>
            {/* order-product-container designed in orderproy=ucts css file */}
                <div className='order-product-container'>
                    {
                    cart.map(product=> <OrderProduct key={product.id} product={product}handleDeleteBtn={handleDeleteBtn}></OrderProduct>)
                    }
                </div>
                <div className='order-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;