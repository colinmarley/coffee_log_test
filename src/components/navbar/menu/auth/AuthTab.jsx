import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({

});

const STYLES = {
    auth: {
        position: "relative",
        display: "block",
        height: "7vh",
        width: "30vw",
        backgroundColor: "orange",
        border: "0.25vh solid black",
        borderRadius: "4vh",
        color: "white"
    }
}

class AuthTab extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return(
            <li style={STYLES.auth}>
                <p>AUTH TAB</p>
            </li>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthTab);