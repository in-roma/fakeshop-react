import React from 'react';
import Product from './components/Product';

export default class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          cart: [],
          total: 0,
        };
      }

      render() {
        const items = this.props.data.map((item, i) => {
          return <Product key={i} info={item} />;
        });
    
        return <div className="results">{items}</div>;
      }
    }
    