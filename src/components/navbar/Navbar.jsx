import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavbarView from './NavbarView'


const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({

});

class Navbar extends Component {
    constructor(props) {
        super(props);

        
    }

    render() {
        return (
            <div>
                <NavbarView />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);