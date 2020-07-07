import React from 'react';
import Product from './Product';

export default class Result extends React.Component {
   


      render() {
        const items = this.props.data.map((item, i) => {
          return <Product key={i} info={item} addToCart={this.props.addToCart}/>;
        });
    
        return <div className="results">{items}</div>;
      }
    }
    