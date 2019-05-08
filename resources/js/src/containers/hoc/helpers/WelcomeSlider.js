/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Helmet } from 'react-helmet';
import IosCheckmarkCircleOutline from 'react-ionicons/lib/IosCheckmarkCircleOutline';
import { css } from 'aphrodite';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from './welcomeStyles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as slideIcons from '../../../icons';

const params = {
  showThumbs: false,
  showArrows: false,
  showStatus: false,
  emulateTouch: true,
  autoPlay: true,
  stopOnHover: false
};

const slides = [
  {
    pic: slideIcons.slide1,
    t1: 'Отзывы студентов',
    t2: 'Узнайте, что думают студенты об интересующем вас преподавателе или учебном заведении'
  },
  {
    pic: slideIcons.slide2,
    t1: 'Ваше мнение',
    t2: 'Делитесь своим мнение с другими'
  },
  {
    pic: slideIcons.slide3,
    t1: 'Взаимообмен',
    t2: 'Будьте в курсе сами и помогайте другим'
  }
];

const beGoneThot = () => {
  localStorage.setItem('isOldSkool', true);
};

const WelcomeSlider = () => (
  <div className={css(styles.wrap)}>
    {window.navigator.userAgent.includes('iPhone') && (
      <Helmet>
        <style>
          {`
            html,
            body {
              position: fixed;
              overflow: hidden;
            }
          `}
        </style>
      </Helmet>
    )}
    <Carousel {...params}>
      {slides.map((slide, i) => (
        <div className={css(styles.slide)} key={i}>
          <div className={css(styles.picWrap)}>
            <div className={css(styles.pic)}>
              <img src={slide.pic} alt="welcome pics" />
            </div>
          </div>
          <div className={css(styles.text)}>
            <h1 className={css(styles.whiteText)}>{slide.t1}</h1>
            <p className={css(styles.whiteText)}>{slide.t2}</p>
          </div>
          {i + 1 === slides.length && (
          <Link to="/" className={css(styles.finishButton)} onClick={() => { beGoneThot(); }}>
            <IosCheckmarkCircleOutline fontSize="60px" color="black" />
          </Link>
          )}
        </div>
      ))}
    </Carousel>
  </div>
);
export default WelcomeSlider;
// have to CHECK STYLING OF HELMET AFTER DISABLING CAROUSEL
