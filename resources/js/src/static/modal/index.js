/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { css } from 'aphrodite';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import handleModal from '../../duck/actions/modalActions';
import styles from './styles';
import arr from './arr';
import { logOut } from '../../duck/actions/accountActions';
import { setDark, setLight } from '../../duck/actions/themeActions';

const renderItems = (props) => {
  const {
    authenticated,
    actionLogOut,
    actionSetDark,
    actionSetLight,
    theme
  } = props;
  let link;
  if (authenticated) {
    link = (<Link className={css(styles.item_link)} onClick={() => { actionLogOut(); }} to="/">Выйти</Link>);
  } else {
    link = (<Link className={css(styles.item_link)} to="/auth">Авторизация</Link>);
  }
  return (
    <React.Fragment>
      <li className={css(styles.li)}>
        {link}
      </li>
      {arr.map(el => (
        <li key={el.id} className={css(styles.li)}>
          <Link className={css(styles.item_link)} to={el.to}>{el.text}</Link>
        </li>
      ))}
      {theme.mode === 'light'
        ? (<li onClick={() => { actionSetDark(); }} role="presentation" className={css(styles.item_link, styles.li)}>Ночной режим</li>)
        : (<li onClick={() => { actionSetLight(); }} role="presentation" className={css(styles.item_link, styles.li)}>Дневной режим</li>)
      }
    </React.Fragment>
  );
};

const Modal = (props) => {
  const { isModalOpen } = props;
  return (
    <div className={css(styles.modal)} style={isModalOpen ? { display: 'block' } : { display: 'none' }}>
      <div className={css(styles.cover)} onClick={() => props.handleModalAction(false)} role="presentation">
        <div className={css(styles.tri)} />
        <div className={css(styles.window)}>
          <ul className={css(styles.list)}>
            {renderItems(props)}
          </ul>
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  handleModalAction: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  actionLogOut: PropTypes.func.isRequired,
  actionSetDark: PropTypes.func.isRequired
};
const mapStateToProps = state => (
  {
    isModalOpen: state.modal.isModalOpen,
    authenticated: state.account.authenticated,
    theme: state.theme
  }
);

export default connect(mapStateToProps,
  {
    handleModalAction: handleModal,
    actionLogOut: logOut,
    actionSetDark: setDark,
    actionSetLight: setLight
  })(Modal);
