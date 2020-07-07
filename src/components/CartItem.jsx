import React from 'react';

const CartItem = (props) => {
    const { id, productName, img, price, inventory } = props.info;

    return (
            // <div key={id} className="cart-item">
                <React.Fragment>
                <img src={img} className="cart-item-img"></img>
                <span className="cart-item-product-name">{productName}</span>
                <span className="cart-item-product-price">{price + " €"}</span>
                <span className="cart-item-product-inventory">{inventory}</span>
                <div className="btn-delete"></div>
                </React.Fragment>
    );
};

export default CartItem;