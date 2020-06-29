import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthTab from './auth/AuthTab';
import ProfileTab from './profile/ProfileTab';
import ViewPage from '../../viewpage/ViewPage';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({

});

const STYLES = {
    menu: {
        top: "0vh",
        left: "0vw",
        width: "30.5vw",
        height: "100vh",
        backgroundColor: "teal"
    },
    menuList: {
        margin: "0",
        padding: "0"
    }
}

class Menu extends Component {
    constructor(props) {
        super(props);

        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.showAuth = this.showAuth.bind(this);
    }   

    openMenu() {

    }

    closeMenu() {

    }

    showAuth() {
        
    }

    render() {
        return(
            <div id="menu" style={STYLES.menu}>
                <ul id="menu-list" style={STYLES.menuList}>
                    <Link to="/auth">
                        <AuthTab />
                    </Link>
                    <Link to="/profile">
                        <ProfileTab />
                    </Link>
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);