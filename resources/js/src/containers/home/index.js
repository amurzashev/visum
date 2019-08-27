/* eslint-disable react/no-danger */
import React from 'react';
import { Helmet } from 'react-helmet';
import { css } from 'aphrodite';
import styles from './styles';
import { Cities, Universities } from './components';

const injectScript = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <script>
            (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-6009075208489133",
                enable_page_level_ads: true
            });
      </script>`
    }}
  />
);

const Home = () => (
  <section className={`section_padding_std ${css(styles.homeWrap)} center_down`}>
    <Helmet>
      <title>Рейтинги профессоров и учебных заведений Казахстана</title>
    </Helmet>
    <Cities />
    <Universities />
    {injectScript()}
  </section>
);
export default Home;
