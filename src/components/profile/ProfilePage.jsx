import React, { Component } from 'react';
import { connect } from 'react-redux';

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


class ProfilePage extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <p>Email: {this.props.email}</p>
                    </li>
                    <li>
                        <p>Username: {this.props.username}</p>
                    </li>
                    <li>
                        <p>First Name: {this.props.firstName}</p>
                    </li>
                    <li>
                        <p>Last Name: {this.props.lastName}</p>
                    </li>
                    <li>
                        <p>Login Type: {this.props.loginType}</p>
                    </li>
                    <li>
                        <p>Photo: {this.props.photo}</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(ProfilePage);