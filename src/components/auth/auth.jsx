import React, { Component } from 'react';
import AuthPage from './auth_page';
import firebase from 'firebase';

import { setAuthStatus } from '../../actions/index';

import { connect } from 'react-redux';

const mapStateToProps = (state , ownProps) => {
    return {
        authStatus: state.auth.authStatus,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAuthStatus: (authStatus) => { dispatch(setAuthStatus(authStatus)); },
    }
}


class Auth extends Component {
    constructor(props) {
        super(props);

        this.initGoogleAuth = this.initGoogleAuth.bind(this);
    }

    initGoogleAuth() {
        //Grab instance of GoogeAuthProvider
        var googleProvider = new firebase.auth.GoogleAuthProvider();

        //Added to "View your data across Google Cloud Platform services"
        googleProvider.addScope('https://www.googleapis.com/auth/cloud-platform.read-only');

        //Uses user's preferred language as specified on device being used
        firebase.auth().useDeviceLanguage();

        //Redirect user to google sign-in/sign-up page
        firebase.auth().signInWithPopup(googleProvider).then((result) => {
            if (result.credential) {
                //successfully signed in and returned credentials
                this.props.setAuthStatus(true);
            }
        })
        .catch((err) => {
            console.log(err);
            this.props.setAuthStatus(false);
        });
    }


    render () {
        return (
            <div>
                <AuthPage initGoogleAuth={() => this.initGoogleAuth()} authStatus={this.props.authStatus} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);