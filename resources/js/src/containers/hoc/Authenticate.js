import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { tryAuthUser } from '../../duck/actions/accountActions';

export default function (ComposedComponend) {
  class Authenticate extends Component {
    static propTypes = {
      account: propTypes.object.isRequired,
      actionTryAuthUser: propTypes.func.isRequired
    }

    constructor(props) {
      super();
      this.checkAuth(props);
    }

    checkAuth = (props) => {
      const { account, actionTryAuthUser } = props;
      if (!account.authenticated && account.token !== null) {
        actionTryAuthUser(account.token);
      }
    }

    render() {
      return <ComposedComponend {...this.props} />;
    }
  }
  const mapStateToProps = state => state;
  return connect(mapStateToProps, { actionTryAuthUser: tryAuthUser })(Authenticate);
}
