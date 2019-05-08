/* eslint-disable no-confusing-arrow */
import React from 'react';
import propTypes from 'prop-types';
import { css } from 'aphrodite';
import { Phone, Code } from './components';
import styles from './styles';

const Auth = ({ auth }) => {
  const renderForm = () => !auth.account.phone ? <Phone /> : <Code />;
  const renderOverlay = () => {
    const arr = [auth.phone.loading, auth.code.loading];
    const shouldRenderOverlay = arr.some(el => el);
    const overlay = (
      <div className={`card centered_full ${css(styles.overlay)}`}>
        Загрузка
      </div>
    );
    return shouldRenderOverlay && overlay;
  };
  return (
    <section className={`${css(styles.wrap)} section_padding_std std_container`}>
      <div className={`card ${css(styles.infoWrap)}`}>
        {renderOverlay()}
        <h1 className={css(styles.h1)}>Авторизация</h1>
        {renderForm()}
      </div>
    </section>
  );
};

Auth.propTypes = {
  auth: propTypes.object.isRequired
};

export default Auth;
