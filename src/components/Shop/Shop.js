import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb,getCartFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const {products} = useLoaderData();
    const [cart,setCart] = useState([])

    useEffect(()=>{
        const storedCart = getCartFromDb();
        const savedCart = [];
        for(const id in storedCart){
            const foundedCart = products.find(product=>product.id===id)
            if(foundedCart){
                // console.log(foundedCart);
                const quantity = storedCart[id]
                foundedCart.quantity = quantity
                savedCart.push(foundedCart)
            }            
        }
        setCart(savedCart)
    },[products])

    const handleAddToCart = (product) =>{
        // console.log(product)
        let newCart = []
        const cartExist = cart.find(p => p.id===product.id)
        if(!cartExist){
            product.quantity = 1;
            newCart = [...cart,product]
        }
        else{
            const rest = cart.filter(p => p.id !== product.id)
            cartExist.quantity = cartExist.quantity + 1;
            newCart = [...rest,cartExist]
        }
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                         key={product.id} 
                         product={product} 
                         handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;