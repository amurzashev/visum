import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import setLastLocation from '../../duck/actions/routingActions';

export default function (ComposedComponend) {
  class Routing extends Component {
    static propTypes = {
      actionSetLastLocation: propTypes.func.isRequired,
      location: propTypes.object.isRequired,
      routing: propTypes.object.isRequired
    }

    componentWillUnmount = () => {
      const { location, actionSetLastLocation, routing } = this.props;
      if (location.pathname !== routing.lastLocation) {
        actionSetLastLocation(location.pathname);
      }
    }

    render() {
      return <ComposedComponend {...this.props} />;
    }
  }
  const mapStateToProps = state => state;
  return connect(mapStateToProps, { actionSetLastLocation: setLastLocation })(Routing);
}
