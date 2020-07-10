import React from 'react';
import Data from './data.json';
import Home from './components/Home';
import Nav from './components/Nav';
import Result from './components/Result';
import Cart from './components/Cart';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: Data,
          total: 0,
          totalQuantity: 0,
          cartItems: [], 
        };
    }
    addToCart = (id) => {
        let cart = this.state.data.find(item => item.id === id)
        let itemQuantities = this.state.cartItems.reduce((acc, red) => acc + red.quantity, this.state.totalQuantity);
        this.setState({...this.state, cartItems: [...this.state.cartItems, cart], totalQuantity: itemQuantities});
    };

    delete = (id) => {
        console.log(this.state.total, "=total");
        let cart = this.state.cartItems.filter(item => item.id !== id)
        let total = cart.reduce((acc, red) => {
            acc = acc + red.price * red.quantity
            return acc;
        }, 0);
        console.log(cart, total, "these are cart & total");
        this.setState({...this.state, cartItems: cart, total: total});

    };

    cartTotal = () => {
        let total = this.state.cartItems.reduce((acc, red) => acc + red.price * red.quantity, this.state.total);
        this.setState({...this.state.total, total: total});
    }

    adding = (id) => {
        let addingItem = this.state.data.map(item => {
            if (item.id === id) {
              item.quantity++
            }
            return item;
            })
            this.setState({...this.state, data: addingItem});
        }
    removing = (id) => {
            let removingItem = this.state.data.map(item => {
                if (item.id === id && item.quantity > 1) {
                  item.quantity--
                }
                return item;
                })
                this.setState({...this.state, data: removingItem});
            }

    render() {
        return (
            <Router>
            <div className="page">
            <div className="menu">
                <Link to="/login"><img className="account-button" src="{process.env.PUBLIC_URL + '/img/accout-icon.svg}"></img></Link>
                <Link to="/cart"><img className="cart-button" src="./img/cart-icon.svg" onClick={this.cartTotal} ></img></Link>
            </div>
            <Nav />
            <Result data={this.state.data} addToCart={this.addToCart} adding={this.adding} removing={this.removing}/>  
            </div>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/cart" exact component={() => <Cart total={this.state.total} totalQuantity={this.state.totalQuantity} cartItems={this.state.cartItems} delete={this.delete}/>}></Route>
                <Route path="/login" exact component={Login}></Route>
            </Switch>
            </Router>
        );
    }
}

export default App;