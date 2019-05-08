import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import IosStar from 'react-ionicons/lib/IosStar';
import IosStarOutline from 'react-ionicons/lib/IosStarOutline';
import defaultStyles from '../defaultStyles';
import { convertToMomentAgoReadable } from '../util';
import styles from '../UserRating/styles';

const renderStars = (stars) => {
  const votes = [];
  for (let i = 0; i < stars; i++) {
    votes.push(
      <IosStar key={Math.random()} color="#ffcc00" fontSize="20px" />
    );
  }
  for (let x = 0; x < (5 - stars); x++) {
    votes.push(
      <IosStarOutline key={Math.random()} color="#ffcc00" fontSize="20px" />
    );
  }
  return (
    <div className={css(defaultStyles.stars)}>
      {votes}
    </div>
  );
};

const renderTimeAgo = (updatedAt) => {
  const timeAgo = convertToMomentAgoReadable(updatedAt);
  return (
    <div className={css(styles.timeAgo)}>
      <p style={{ fontSize: 12 }}>{timeAgo}</p>
    </div>
  );
};

const Ratings = (props) => {
  let { ratings } = props;
  const { skipFirst, theme } = props;
  if (skipFirst) {
    ratings = ratings.slice(1);
  }
  return (
    <ul className={css(defaultStyles.commentsWrap)}>
      {ratings.map(rating => (
        <li key={rating.id} className={css(defaultStyles.comment)}>
          <div className={css(defaultStyles.div1, theme.mode === 'dark' ? defaultStyles.div1Dark : defaultStyles.div1Light)}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {renderStars(rating.rating)}
              {renderTimeAgo(rating.updated_at)}
            </div>
          </div>
          <div className={css(defaultStyles.div2)}>
            {rating.comment}
          </div>
        </li>
      ))}
    </ul>
  );
};

Ratings.propTypes = {
  ratings: PropTypes.array.isRequired,
  skipFirst: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired
};
const mapStateToProps = state => ({ theme: state.theme });
export default connect(mapStateToProps)(Ratings);
