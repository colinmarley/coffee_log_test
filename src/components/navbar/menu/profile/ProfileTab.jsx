import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({

});

class ProfileTab extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return(
            <div>
                <p>Profile Tab</p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileTab);