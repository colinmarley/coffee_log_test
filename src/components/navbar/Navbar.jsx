import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './menu/Menu';
import NavbarView from './NavbarView'

// import NavbarView from './NavbarView'


const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({

});

const STYLES = {
    navbar: {
        position: "relative",
        width: "100vw",
        height: "10vh",
        backgroundColor: "teal"
    }
}

class Navbar extends Component {
    constructor(props) {
        super(props);

        
    }

    render() {
        return (
            <div id="navbar-root" style={STYLES.navbar}>
                <NavbarView title={"Coffee Log"} />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);