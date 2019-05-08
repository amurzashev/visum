import React from 'react';
import { connect } from 'react-redux';
import WelcomeSlider from './helpers/WelcomeSlider';

export default function (ComposedComponent) {
  const Welcome = (props) => {
    const isOldSkool = localStorage.getItem('isOldSkool');
    if (!isOldSkool) {
      return (
        <>
          <WelcomeSlider />
          <ComposedComponent {...props} />
        </>
      );
    }
    return (
      <ComposedComponent {...props} />
    );
  };
  const mapStateToProps = state => state;
  return connect(mapStateToProps)(Welcome);
}
