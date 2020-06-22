import React, { Component } from "react";

import { connect } from 'react-redux';

class AuthPage extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <button id="google-auth-btn" onClick={this.props.initGoogleAuth}>Google</button>
                <h1>Auth Status {(this.props.authStatus) ? "True" : "False"} </h1>
            </div>
        );
    }


}

export default connect ()(AuthPage);