import React, { Component } from 'react';
import firebase from 'firebase';
import * as firestore from 'firebase/firestore';
import { connect } from 'react-redux';



const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({

})



class Home extends Component {
    constructor(props) {
        super(props);

        this.getAuthStatus = this.getAuthStatus.bind(this);
    }

    getAuthStatus() {

    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Home);