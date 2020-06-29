import React from 'react';
import Nav from './components/Nav';
import Result from './components/Result';

class App extends React.Component {

    render() {
        return (
            <div className="page">
                <Nav />
                <Result />
            </div>
        );
    }
}

export default App;