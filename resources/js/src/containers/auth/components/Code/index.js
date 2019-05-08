/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import InputMask from 'react-input-mask';
import sharedStyles from '../sharedStyles';
import { registerUser, resetCodeError, resetAuth } from '../../../../duck/actions/authActions';

const Code = ({
  phone,
  theme,
  history,
  routing,
  actionRegisterUser,
  actionResetCodeError,
  actionResetAuth,
  codeError
}) => {
  const [error, setError] = useState(false);
  const [code, setCode] = useState(false);
  const [timer, setTimer] = useState(60);
  let timerOut;
  useEffect(() => {
    if (timer !== 0) {
      timerOut = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
    if (codeError) {
      setError(true);
    }
    return () => {
      clearTimeout(timerOut);
    };
  }, [timer, codeError]);

  const inputTextField = css(
    sharedStyles.input,
    sharedStyles.fieldSet,
    error && sharedStyles.inputTextError
  );

  const errorTextStyle = css(
    sharedStyles.absText,
    error ? sharedStyles.absTextShow : sharedStyles.absTextHide
  );

  const inputMask = css(
    sharedStyles.inputText,
    theme.mode === 'dark' && sharedStyles.darkInputText
  );

  const tryAgainButton = css(
    timer !== 0 ? sharedStyles.button_blocked : sharedStyles.button_allowed,
    sharedStyles.input,
    sharedStyles.button
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      setError(true);
    } else {
      actionRegisterUser(phone, code, history, routing.lastLocation);
    }
  };

  const handleCodeInput = (e) => {
    const codeInput = e.target.value.replace(/\D/g, '');
    setCode(codeInput);
    setError(false);
    if (codeError) {
      actionResetCodeError();
    }
  };

  const handleReset = () => {
    if (timer === 0) {
      actionResetAuth();
    }
  };

  return (
    <div className={css(sharedStyles.wrap)}>
      <form onSubmit={e => handleFormSubmit(e)} className={css(sharedStyles.form)}>
        <div className={inputTextField}>
          <InputMask
            placeholder="SMS код"
            mask="999999"
            value={code}
            onChange={e => handleCodeInput(e)}
            className={inputMask}
            type="tel"
          />
          <div className="centered_full" style={error ? { opacity: 1 } : { opacity: 0 }}>
            <p className={css(sharedStyles.warning)}>!</p>
          </div>
        </div>
        <p className={errorTextStyle}>Неправильный код</p>
        <input className={css(sharedStyles.input, sharedStyles.button, sharedStyles.button_allowed)} type="submit" value="OK" />
      </form>
      <button style={{ marginTop: -20 }} className={tryAgainButton} type="submit" onClick={handleReset.bind(this)}>
        Попробовать еще раз {timer !== 0 && `через ${timer}`}
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  theme: state.theme,
  phone: state.auth.account.phone,
  routing: state.routing,
  codeError: state.auth.code.error
});
export default connect(mapStateToProps,
  {
    actionRegisterUser: registerUser,
    actionResetCodeError: resetCodeError,
    actionResetAuth: resetAuth
  })(Code);
