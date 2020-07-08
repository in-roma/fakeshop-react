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
          cartItems: [ 
        //     {  
        //   "id": 2,
        //   "productName": "Product 2",
        //   "img": "./img/002.png",
        //   "price": 20,
        //   "quantity": 0},
        //   {  
        //     "id": 2,
        //     "productName": "Product 2",
        //     "img": "./img/002.png",
        //     "price": 20,
        //     "quantity": 0
        // }
        ], 
        };
    }
    addToCart = (id) => {
        let cart = this.state.data.find(item => item.id === id)
        this.setState({...this.state, cartItems: [...this.state.cartItems, cart]});
        console.log(cart);
        let total = this.state.cartItems.reduce((acc, red) => acc + red.price, this.state.total);
        console.log(total);
        this.setState({total: total});
      };

    delete = (id) => {
        let cart = this.state.cartItems.filter(item => item.id !== id)
        this.setState({...this.state, cartItems: cart});
        console.log(id);
      };

    adding = (id) => {
        let addingItem = this.state.data.map(item => {
            if (item.id === id) {
              item.quantity++
            }
            return item;
            })
            console.log(addingItem);
            this.setState({...this.state, data: addingItem});
        }
    removing = (id) => {
            let removingItem = this.state.data.map(item => {
                if (item.id === id) {
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
                <Link to="/login"><img className="account-button" src="./img/accout-icon.svg"></img></Link>
                <Link to="/cart"><img className="cart-button" src="./img/cart-icon.svg"></img></Link>
            </div>
            <Nav />
            <Result data={this.state.data} addToCart={this.addToCart} adding={this.adding} removing={this.removing}/>  
            </div>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/cart" exact component={() => <Cart cartItems={this.state.cartItems} delete={this.delete}/>}></Route>
                <Route path="/login" exact component={Login}></Route>
            </Switch>
            </Router>
        );
    }
}

export default App;