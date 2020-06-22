import React, { Component } from 'react';
import firebase from 'firebase';

import { initProfile } from '../../../actions/index';

import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';

const mapStateToProps = (state, ownProps) => {
    return {
        email: state.profile.email,
        username: state.profile.username,
        firstName: state.profile.firstName,
        lastName: state.profile.lastName,
        loginType: state.profile.loginType,
        photo: state.profile.photo
    }
}

const mapDispatchToProps = dispatch => {
    
}

class Profile extends Component {
    constructor(props) {
        super(props);

        this.updateProfile = this.updateProfile.bind(this);
    }

    updateProfile() {

    }

    render() {
        return (
            <ProfilePage />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);