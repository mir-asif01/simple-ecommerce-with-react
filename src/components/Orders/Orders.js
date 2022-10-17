import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, getCartFromDb, removeFromDb, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderProduct from '../OrderProduct/OrderProduct';

const Orders = () => {
    const { products, previousCart } = useLoaderData();
    const [cart, setCart] = useState(previousCart);

    const handleDeleteBtn = (id) => {
        console.log(id);
        const filteredCart = cart.filter(product => product.id !== id);
        setCart(filteredCart);
        removeFromDb(id);
    }

    const clearCartBtnHandler = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div>
            <h4>This is orders page</h4>
            <div className='shop-container'>
                {/* order-product-container designed in orderproy=ucts css file */}
                <div className='order-product-container'>
                    {
                        cart.map(product => <OrderProduct key={product.id} product={product} handleDeleteBtn={handleDeleteBtn}></OrderProduct>)
                    }
                    {
                        cart.length === 0 && <h2>No preview products shop here <Link to='/'>Shop Here</Link></h2>
                    }
                </div>
                <div className='order-container'>
                    <Cart clearCartBtnHandler={clearCartBtnHandler} cart={cart}>
                        
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;