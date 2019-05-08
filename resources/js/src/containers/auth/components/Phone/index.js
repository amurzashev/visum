/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import InputMask from 'react-input-mask';
import sharedStyles from '../sharedStyles';
import { phoneCheck } from '../../../../duck/actions/authActions';

const Phone = ({ theme, actionPhoneCheck }) => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);

  const handlePhoneInput = (e) => {
    const phoneNumber = e.target.value.replace(/\D/g, '');
    setPhone(phoneNumber);
    setError(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 11) {
      setError(true);
    } else {
      actionPhoneCheck(phone);
    }
  };

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

  return (
    <div className={css(sharedStyles.wrap)}>
      <form onSubmit={e => handleFormSubmit(e)} className={css(sharedStyles.form)}>
        <div className={inputTextField}>
          <InputMask
            placeholder="Ваш сотовый"
            mask="+7(799)999-99-99"
            value={phone}
            onChange={e => handlePhoneInput(e)}
            className={inputMask}
            type="tel"
          />
          <div className="centered_full" style={error ? { opacity: 1 } : { opacity: 0 }}>
            <p className={css(sharedStyles.warning)}>!</p>
          </div>
        </div>
        <p className={errorTextStyle}>Неправильный номер</p>
        <input className={css(sharedStyles.input, sharedStyles.button, sharedStyles.button_allowed)} type="submit" value="OK" />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({ theme: state.theme });
const mapDispatchToProps = { actionPhoneCheck: phoneCheck };
export default connect(mapStateToProps, mapDispatchToProps)(Phone);
