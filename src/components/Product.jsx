import React from 'react';

const Product = (props) => {
    const { id, productName, img, price, inventory } = props.info;

    return (
            <div key={id} className="card">
                <span className="product-name">{productName}</span><span className="product-price">{price}</span>
                <button className="btn-cart-plus">+</button><button className="btn-cart-minus">-</button><button className="btn-to-cart">Add to cart</button>
            </div>
    );
};

export default Product;