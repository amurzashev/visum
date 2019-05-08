import React from 'react';
import { Helmet } from 'react-helmet';
import { css } from 'aphrodite';
import styles from './styles';
import { Cities, Universities } from './components';

const Home = () => (
  <section className={`section_padding_std ${css(styles.homeWrap)} center_down`}>
    <Helmet>
      <title>Рейтинги профессоров и учебных заведений Казахстана</title>
    </Helmet>
    <Cities />
    <Universities />
  </section>
);
export default Home;
