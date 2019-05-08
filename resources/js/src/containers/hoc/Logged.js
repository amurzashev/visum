import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  const Logged = (props) => {
    const { account } = props;
    if (!account.authenticated && account.token === null) {
      return (
        <ComposedComponent {...props} />
      );
    }
    return <Redirect to="/" {...props} />;
  };
  Logged.propTypes = {
    account: PropTypes.object.isRequired
  };
  const mapStateToProps = state => state;
  return connect(mapStateToProps)(Logged);
}
