import React from 'react';
import Data from './data.json';
import Home from './components/Home';
import Nav from './components/Nav';
import Result from './components/Result';
import Cart from './components/Cart';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: Data
        };
    }

    render() {
        return (
            <Router>
            <div className="page">
            <div className="menu">
                <img className="account-button" src="./img/accout-icon.svg"></img>
                <Link to="/cart"><img className="cart-button" src="./img/cart-icon.svg"></img></Link>
            </div>
            <Nav />
            <Result data={this.state.data}/>  
            </div>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/cart" exact component={Cart}></Route>
            </Switch>
            </Router>
        );
    }
}

export default App;