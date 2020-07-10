import React from 'react';

class Nav extends React.Component {
    render() {
            return <div className="navigation">
                <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt=""/>
                {/* <span id="search">SEARCH</span>
                <form onSubmit={this.submitHandle}>
                <input type="text" className="search-input" placeholder="" onChange={this.changeHandle} value={this.state.userInput}></input><input className="btn-ok" type="submit" value="filter">OK</input>
                </form>
                <div className="white-line-search"></div> */}
            </div>

    }
}

export default Nav; 