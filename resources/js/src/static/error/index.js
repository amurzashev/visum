/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

const Error = ({ theme }) => (
  <div
    style={{
      width: '100%',
      padding: '10px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <p style={theme.mode === 'dark' ? { color: 'white' } : { color: 'black' }}>Ошибка</p>
  </div>
);
const mapStateToProps = state => ({ theme: state.theme });
export default connect(mapStateToProps)(Error);
