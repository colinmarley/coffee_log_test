import React, { Component } from 'react';
import AuthPage from './AuthPage';
import firebase from 'firebase';

import { setAuthStatus, initProfile } from '../../actions/index';

import { connect } from 'react-redux';

const mapStateToProps = (state , ownProps) => {
    return {
        authStatus: state.auth.authStatus,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAuthStatus: (authStatus) => { dispatch(setAuthStatus(authStatus)); },
        initProfile: (email, username, firstName, lastName, profileType, photo) => {
            dispatch(initProfile(email, username, firstName, lastName, profileType, photo));
        },
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
                console.log(result);
            }

            const email = result.user.email;
            const username = result.user.email;
            const firstName = result.user.displayName.split(' ')[0];
            const lastName = result.user.displayName.split(' ')[1];
            const loginType = "Google";
            const photo = result.user.photoURL;

            this.props.initProfile(email, username, firstName, lastName, loginType, photo);
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