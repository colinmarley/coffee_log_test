import React, { Component } from 'react';
import Menu from './menu/Menu';


class NavbarView extends Component {
    
    render() {
        return (
            <div id="navbar-root">
                <Menu />
            </div>
        );
    }

}

export default NavbarView;