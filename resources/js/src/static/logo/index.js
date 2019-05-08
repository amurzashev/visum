/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import { Link } from 'react-router-dom';
import styles from './styles';

const Logo = ({ theme }) => (
  <div className={css(styles.logoWrap)}>
    <Link to="/" style={theme.mode === 'dark' ? { color: 'white' } : { color: 'black' }}>
      VISUM
    </Link>
  </div>
);
const mapStateToProps = state => ({ theme: state.theme });
export default connect(mapStateToProps)(Logo);
