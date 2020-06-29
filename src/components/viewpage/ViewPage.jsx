import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({

});

const STYLES = {
    viewPage: {
        

    }
}


class ViewPage extends Component {
    constructor(props) {
        super(props);

        this.setPage = this.setPage.bind(this);
    }

    setPage(newComponent) {
        ReactDOM.render(newComponent, document.getElementById('view-page'));
    }

    render() {
        return (
            <div id="view-page" style={STYLES.viewPage}> 

            </div>
        )
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewPage);