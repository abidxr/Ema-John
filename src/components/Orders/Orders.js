import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import Cart from '../Cart/Cart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';


const Orders = () => {

    useEffect(() => {
        document.title = "Orders"
    });


    const { initialCart } = useLoaderData();

    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) => {
        //console.log("click delete", id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);

    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {cart.map(product => <ReviewProduct
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                ></ReviewProduct>)}
                {
                    cart.length === 0 && <h1>Youy have no selected Product to Review<Link to="/">Go to Product Page</Link></h1>
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} clearCart={clearCart}></Cart>

            </div>

        </div >
    );
};

export default Orders;

