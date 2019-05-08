/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdArrowForward from 'react-ionicons/lib/MdArrowForward';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';
import styles from './styles';

const lis1 = [
  'Комментарий должен быть от 10 до 500 символов',
  'Оценка должна быть от 1 до 5 звезд'
];

const lis2 = [
  'Пишите конструктивную критику',
  'Пишите только правду',
  'Никаких оскорблений личностного характера',
  'Никакого мата'
];

class Info extends Component {
  state = {
    currentSlide: 1
  }

  renderFirstSlide = () => {
    const { theme } = this.props;
    return (
      <>
        <p className={css(theme.mode === 'dark' && styles.darkMode)}>Правила</p>
        <ul className={css(styles.list)}>
          {lis1.map((li, i) => (
            <li key={`${i}li-rules-info`} className={css(theme.mode === 'dark' && styles.darkMode)}>{li}</li>
          ))}
        </ul>
        <div id="icon_exception" onClick={() => { this.setState({ currentSlide: 2 }); }}>
          <MdArrowForward fontSize="14px" className={css(styles.arrow)} />
        </div>
      </>
    );
  };

  renderSecondSlide = () => {
    const { theme } = this.props;
    return (
      <>
        <p className={css(theme.mode === 'dark' && styles.darkMode)}>Важно</p>
        <ul className={css(styles.list)}>
          {lis2.map((li, i) => (
            <li key={`${i}li-rules-info`} className={css(theme.mode === 'dark' && styles.darkMode)}>{li}</li>
          ))}
          <li>
            <Link to="/policy" className={css(styles.liLink)}>Подробнее</Link>
          </li>
        </ul>
        <div onClick={() => { this.setState({ currentSlide: 1 }); }}>
          <MdArrowForward fontSize="14px" className={css(styles.arrow, styles.arrowRotate)} />
        </div>
      </>
    );
  };

  render() {
    const { currentSlide } = this.state;
    return (
      <div className={`card card_padding_sm ${css(styles.wrap)}`}>
        {currentSlide === 1 ? this.renderFirstSlide() : this.renderSecondSlide()}
      </div>
    );
  }
}
const mapStateToProps = state => ({ theme: state.theme });
export default connect(mapStateToProps)(Info);
