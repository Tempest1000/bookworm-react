import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function logout() {
    console.log("logout");
}

const HomePage = ({ isAuthenticated }) => (
    <div>
        <h1>Home Page</h1>
        {isAuthenticated ? (
      <button onClick={() => logout()}>Logout</button>
    ) : (
      <div>
        <Link to="/login">Login</Link>
      </div>
    )}
    </div>
);

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.id_token
  };
}

export default connect(mapStateToProps, null)(HomePage);