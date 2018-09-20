import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

const App = () => (
<div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
</div>
);

App.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps)(App);