import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const DashboardPage = ({ isConfirmed }) => (
    <div>
        <h1>Dashboard Page</h1>
        {!isConfirmed && <ConfirmEmailMessage />}
    </div>
);

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed
    }
}

DashboardPage.propTypes = {
};

export default connect(mapStateToProps)(DashboardPage);