import React from 'react'
import "./ReviewProduct.css"

const ReviewProduct = ({ product, handleRemoveItem }) => {
    const { name, id, price, img, shipping, quantity } = product;
    return (
        <div className='review-product'>
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <p>{price}</p>
                <p>{shipping}</p>
                <p>{quantity}</p>
            </div>
            <div>
                <button onClick={() => handleRemoveItem(id)}>X</button>
            </div>
        </div>
    );
};

export default ReviewProduct;
