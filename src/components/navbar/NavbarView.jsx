import React, { Component } from 'react';
// import Menu from './menu/Menu';

const STYLES = {
    title: {
        position: "relative",
        fontSize: "xxx-large",
        color: "orange",
        fontFamily: "-webkit-body",
        margin: "0vh"
    }
}

class NavbarView extends Component {
    
    render() {
        return (
            <div>
                <h1 style={STYLES.title}>{this.props.title}</h1>
            </div>
        );
    }

}

export default NavbarView;