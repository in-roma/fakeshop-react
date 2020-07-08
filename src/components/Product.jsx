import React from 'react';

const Product = (props) => {
    const { id, productName, img, price, quantity, totalItem } = props.info;

    return (
            <div key={id} className="card">
                <img src={img}></img>
                <div className="info">
                    <div className="card-info-product">
                        <span className="product-name">{productName}</span><span className="product-price">{price + " €"}</span>
                    </div>
                    <div className="card-info-buttons">
                        <div className="btn-adding-removing">
                            <button className="btn-cart-plus" onClick={() => props.adding(id)}>+</button><span className="product-quantity">{quantity}</span><button className="btn-cart-minus" onClick={() => props.removing(id)}>-</button></div>
                         <div className="btn-to-cart" onClick={() => props.addToCart(id)}>Add to cart</div>
                     </div>
                </div>
            </div>
    );
};

export default Product;