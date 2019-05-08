/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component, } from 'react';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-113531103-4');

const Tracker = (WrappedComponent, options = {}) => {
  const trackPage = (page) => {
    // temp fix? stupid yes, works I DONT KNOW
    setTimeout(() => {
      GoogleAnalytics.set({
        page,
        ...options,
      });
      GoogleAnalytics.pageview(page);
    }, 200);
  };

  // eslint-disable-next-line
  const HOC = class extends Component {
    componentDidMount() {
      // eslint-disable-next-line
      const page = this.props.location.pathname + this.props.location.search;
      trackPage(page);
    }

    componentDidUpdate(prevProps) {
      const currentPage = prevProps.location.pathname + prevProps.location.search;
      const nextPage = this.props.location.pathname + this.props.location.search;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default Tracker;
