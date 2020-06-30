import React from 'react';
import Data from './data.json';
import Nav from './components/Nav';
import Result from './components/Result';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: Data
        };
    }

    render() {
        return (
            <div className="page">
                <Nav />
                <Result data={this.state.data}/>  
            </div>
        );
    }
}

export default App;