import React from 'react';

const Product = (props) => {
    const { id, productName, img, price, inventory } = props.info;

    return (
            <div key={id} className="card">
                <img src={img}></img>
                <div className="info">
                    <span className="product-name">{productName}</span><span className="product-price">{price + " €"}</span>
                    <div className="buttons">
                        <button className="btn-cart-plus">+</button><span className="product-inventory">{inventory}</span><button className="btn-cart-minus">-</button><button className="btn-to-cart">Add to cart</button>
                     </div>
                </div>
            </div>
    );
};

export default Product;