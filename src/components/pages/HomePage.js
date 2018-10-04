import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { Button } from 'semantic-ui-react';
import * as actions from "../../actions/authActions";

function logout() {
    console.log("logout");
    this.props.logout();
}

const HomePage = ({ isAuthenticated, logout }) => (
    <div>
        <h1>Home Page</h1>
        {isAuthenticated ? (
      <Button onClick={() => logout() } primary>Logout</Button>
    ) : (
        <Link to="/login">Login</Link>
    )}
    </div>
);

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.id_token
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);