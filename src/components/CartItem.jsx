import React from 'react';

const CartItem = (props) => {
    const { id, productName, img, price, quantity, totalItem } = props.info;

    return (

                <React.Fragment>
                <img src={process.env.PUBLIC_URL + '/img/' + img} className="cart-item-img"></img>
                <span className="cart-item-product-name">{productName} </span>
                <span className="cart-item-product-price">{price + " €"} </span>
                <span className="cart-item-product-quantity">{quantity} </span>
                <span className="cart-item-product-totalItem">{price *  quantity + ".00€"} </span>
                <div className="btn-delete" onClick={() => props.delete(id)} key={id}></div>
                </React.Fragment>
    );
};

export default CartItem;