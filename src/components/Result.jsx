import React from 'react';
import Product from './Product';

export default class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          cart: [],
          total: 0,
        };
      }
      addToCart = (item) => {
        this.setState({
          cart: [...this.state.cart, item],
        });
        console.log(this.state.cart);
      };

      render() {
        const items = this.props.data.map((item, i) => {
          return <Product key={i} info={item} OnClick={this.addToCart}/>;
        });
    
        return <div className="results">{items}</div>;
      }
    }
    