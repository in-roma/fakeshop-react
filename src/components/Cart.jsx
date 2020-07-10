import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

export default class Cart extends React.Component{
  
    render() {
        const total = this.props.total;
        const totalQuantity = this.props.totalQuantity;
        const items = this.props.cartItems.map((item, i) => {
        return <CartItem key={i} info={item} delete={this.props.delete}/>;
      });

            return (

            <div className="cart">
                 <Link to="/"><div className="card-background"></div></Link>
                <div className="cart-window">
                    <h1>MY CART</h1> <Link id="close-window" to="/"><span>Close Window</span></Link>
                    <span className="cart-productName">PRODUCT</span><span className="cart-price">PRICE</span><span className="cart-quantity">QUY</span><span className="total">TOTAL</span><span className="delete" ></span>
                    <div className="cart-results">{items}</div>;
                    <div className="total-line"></div>
            <span id="cart-total">TOTAL</span><span id="cart-total-sum">{total + ".00€"}</span>
                    <div className="btn-order">Order</div>

                </div>
            </div>
            )

    }

}

        
