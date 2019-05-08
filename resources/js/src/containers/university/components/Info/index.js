import React from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import propTypes from 'prop-types';
import styles from './styles';

const renderRating = (rating) => {
  let num;
  if ((rating >= 0.0) && (Math.floor(rating) === rating) && rating !== Infinity) {
    num = rating;
  } else {
    num = rating.toFixed(1);
  }
  return (
    <h3>Рейтинг: {num}</h3>
  );
};

const Info = (props) => {
  const { info, theme, rating } = props;
  return (
    <div className={`card_no_max card_padding ${css(styles.wrap)}`}>
      <h1>{info.name}, {info.city}</h1>
      {rating !== null && renderRating(rating)}
      <a target="_blank" rel="noopener noreferrer" href={info.website} className={css(styles.link, theme.mode === 'dark' && styles.linkDark)}>Веб сайт заведения</a>
    </div>
  );
};
Info.propTypes = {
  info: propTypes.shape({
    name: propTypes.string,
    city: propTypes.string,
    website: propTypes.string
  }).isRequired,
  theme: propTypes.object.isRequired,
  rating: propTypes.number
};
const mapStateToProps = state => ({ theme: state.theme });
export default connect(mapStateToProps)(Info);
