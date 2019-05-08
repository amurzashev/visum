import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { themes } from './helpers/themes';

export default function (ComposedComponent) {
  const Theme = (props) => {
    const { theme } = props;
    return (
      <>
        <Helmet>
          <style>
            {theme.mode === 'light' ? themes.light : themes.dark}
          </style>
        </Helmet>
        <ComposedComponent {...props} />
      </>
    );
  };
  Theme.propTypes = {
    theme: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({ theme: state.theme });
  return connect(mapStateToProps)(Theme);
}
