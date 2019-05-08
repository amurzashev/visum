import React, { Component } from 'react';
import { css } from 'aphrodite';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import { hideError } from '../../duck/actions/errorActions';
import setErrorMessage from './util';

class ErrorPopup extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    code: PropTypes.number,
    actionHideError: PropTypes.func.isRequired
  }

  componentDidUpdate = () => {
    // console.log(prevProps);
  }

  render() {
    const { code, visible, actionHideError } = this.props;
    if (!visible) {
      return null;
    }
    const message = setErrorMessage(code);
    return (
      <div className={css(styles.wrap)} onClick={() => actionHideError()} role="presentation">
        {message}
      </div>
    );
  }
}

const mapStateToProps = state => state.error;
export default connect(mapStateToProps, { actionHideError: hideError })(ErrorPopup);
