import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";

class LoginPage extends React.Component {

    // need to connect this component to redux to have 
    // the ability to dispatch the login action
    // this is done with the connect function and MapDispatchToProps
    submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render() {
        return (
            <div>
            <h1>Login Page</h1>
                <LoginForm submit={this.submit}/>
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
  };

// null is for MapStateToProps (none yet), { login } is the action
export default connect(null, { login })(LoginPage);