import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import styles from './styles';
import { handleIsLoggedIn, handleDidComment } from './util';
import { Editor } from '../../..';

const Input = (props) => {
  const {
    account,
    ratings,
    entity,
    theme
  } = props;
  const isLoggedIn = handleIsLoggedIn(account);
  const didComment = handleDidComment(account.id, ratings.items);
  if (!isLoggedIn) {
    return (
      <div className={css(styles.notLoggedInWrap)}>
        <p>Хотите оставить свой отзыв?</p>
        <Link className={css(styles.notLoggedInButton, theme.mode === 'dark' ? styles.notLoggedInButtonDark : styles.notLoggedInButtonLight)} to="/auth">Войти</Link>
      </div>
    );
  }
  if (!didComment) {
    return <Editor type="new" entity={entity} />;
  }
  // logged in and commented
  return null;
};
Input.propTypes = {
  account: PropTypes.object.isRequired,
  ratings: PropTypes.object.isRequired,
  entity: PropTypes.oneOf([0, 1]).isRequired,
  theme: PropTypes.object.isRequired
};
const mapStateToProps = state => ({ theme: state.theme });
export default connect(mapStateToProps)(Input);
