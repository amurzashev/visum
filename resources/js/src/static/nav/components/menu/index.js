import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import { css } from 'aphrodite';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import handleModal from '../../../../duck/actions/modalActions';

const Menu = (props) => {
  const { handleModalAction } = props;
  return (
    <div style={{ marginLeft: 25 }}>
      <IoIosMenu size={30} className={css(styles.burger)} onClick={() => handleModalAction(true)} />
    </div>
  );
};

Menu.propTypes = {
  handleModalAction: PropTypes.func.isRequired
};

export default connect(null, { handleModalAction: handleModal })(Menu);
