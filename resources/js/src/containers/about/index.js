/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Helmet } from 'react-helmet';
import { css } from 'aphrodite';
import { connect } from 'react-redux';
import styles from './styles';

const About = ({ theme }) => (
  <section className="section_padding_std centered">
    <Helmet>
      <title>О проекте</title>
    </Helmet>
    <div className="card card_padding">
      <h1>Коротко о проекте</h1>
      <p className={css(styles.p)}>
        Привет!🙋🏽‍♂️ Меня зовут Абылай и я чувак, который сделал этот сайт. Надеюсь, вам оказалась или окажется полезной моя задумка.
      </p>
      <p className={css(styles.p)}>
        Вообще все очень просто, сайт поможет вам делиться своим опытом и мнением с другими студентами об учебных заведениях и преподавателях Казахстана.
      </p>
      <p className={css(styles.p)}>
        Здесь любой может высказать свое мнение, всех выслушают, а самое главное: наш голос, голос студентов, не останется неуслышанным.
      </p>
      <p className={css(styles.p)}>
        VISUM даст возможность прошедшим через огонь и лед передать свой опыт молодому поколению, тем самым делая свой вклад в светлое будущее нашей страны🇰🇿.
      </p>
      <p className={css(styles.p)}>
        Если вы хотите помочь проекту можете <a target="_blank" rel="noopener noreferrer" href="https://buymeacoff.ee/sN3WzPJFy" className={css(styles.a, theme.mode === 'dark' && styles.aDark)}>купить мне кофе🥤</a>
      </p>
      <p className={css(styles.p)}>А если у вас есть замечания или предложения по поводу сайта пишите мне в телеграм <a target="_blank" rel="noopener noreferrer" href="https://t.me/ablitto" className={css(styles.a, theme.mode === 'dark' && styles.aDark)}>@ablitto</a></p>
    </div>
  </section>
);
const mapStateToProps = state => ({ theme: state.theme });
export default connect(mapStateToProps)(About);
