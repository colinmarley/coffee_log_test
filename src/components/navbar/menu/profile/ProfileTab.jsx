import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({

});

const STYLES = {
    profile: {
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

class ProfileTab extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return(
            <li style={STYLES.profile}>
                <p>Profile Tab</p>
            </li>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileTab);