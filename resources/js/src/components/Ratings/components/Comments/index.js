import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import IosChatboxes from 'react-ionicons/lib/IosChatboxes';
import styles from './styles';
import { handleHasAnyRatings, handleDidComment } from './util';
import { Ratings, UserRating } from './components';

const Comments = (props) => {
  const { ratings, account, theme } = props;
  const hasAnyRatings = handleHasAnyRatings(ratings.items);
  const didComment = handleDidComment(account.id, ratings.items);
  if (!hasAnyRatings) {
    return (
      <div className={css(styles.wrap)}>
        <div className={css(styles.insideWrap)}>
          <IosChatboxes className={css(styles.text)} color={theme.mode === 'dark' ? '#fff' : ''} />
          <p className={css(styles.text)}>Здесь пока нет отзывов</p>
          <p>Будь первым, поделись своим мнением!</p>
        </div>
      </div>
    );
  }
  if (!didComment) {
    return (
      <Ratings ratings={ratings.items} skipFirst={false} />
    );
  }
  return (
    <React.Fragment>
      <UserRating rating={ratings.items[0]} {...props} />
      <Ratings ratings={ratings.items} skipFirst />
    </React.Fragment>
  );
};
Comments.propTypes = {
  ratings: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
const mapStateToProps = state => ({ theme: state.theme });
export default connect(mapStateToProps)(Comments);
