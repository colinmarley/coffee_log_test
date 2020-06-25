import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthTab from './auth/AuthTab';
import ProfileTab from './profile/ProfileTab';

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({

});

class Menu extends Component {
    constructor(props) {
        super(props);

        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }   

    openMenu() {

    }

    closeMenu() {

    }

    render() {
        return(
            <div>
                <AuthTab />
                <ProfileTab />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);