import React from 'react';

class Nav extends React.Component {
    render() {
            return <div className="navigation">
                <img src="./img/logo.png" alt=""/>
                <span id="search">SEARCH</span>
                <input type="text" className="search-input" placeholder=""></input>
                <div className="white-line-search"></div>
            </div>

    }
}

export default Nav; 