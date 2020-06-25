import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({

});

class AuthTab extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return(
            <div>
                <p>AUTH TAB</p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthTab);