/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import React from 'react';
import IosStar from 'react-ionicons/lib/IosStar';
import IosStarOutline from 'react-ionicons/lib/IosStarOutline';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import { connect } from 'react-redux';
import defaultStyles from '../defaultStyles';
import styles from './styles';
import { Editor } from '../../../../..';
import { deleteUniversityRating } from '../../../../../../duck/actions/universityActions';
import { deleteProfessorRating } from '../../../../../../duck/actions/professorActions';
import { convertToMomentAgoReadable } from '../util';

const renderStars = (stars) => {
  const votes = [];
  for (let i = 0; i < stars; i++) {
    votes.push(
      <IosStar key={Math.random()} color="#ffcc00" />
    );
  }
  for (let x = 0; x < (5 - stars); x++) {
    votes.push(
      <IosStarOutline key={Math.random()} color="#ffcc00" />
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

const UserRating = (props) => {
  const {
    rating,
    isLoadingPro,
    isLoadingUni,
    actionDeleteUniversityRating,
    actionDeleteProfessorRating,
    entity,
    theme
  } = props;
  const renderEdit = () => {
    const data = {
      ...rating,
      entity
    };
    console.log(data);
    return (
      <input
        type="submit"
        value="Удалить"
        className={css(styles.more)}
        onClick={() => { entity === 1 ? actionDeleteProfessorRating(data) : actionDeleteUniversityRating(data); }}
      />
    );
  };
  const renderOverlay = () => (
    <div className={css(styles.loadingOverlay)}>
      <div className={css(styles.loadingOverlayDiv)}>
        <p>loading</p>
      </div>
    </div>
  );
  const renderEditor = () => (
    <Editor type="edit" entity={entity} />
  );
  return (
    <React.Fragment>
      {renderEditor()}
      <div key={rating.id} className={css(defaultStyles.comment, styles.userComment, theme.mode === 'dark' ? styles.userCommentDark : styles.userCommentLight)}>
        { (isLoadingUni || isLoadingPro) && renderOverlay() }
        <div className={css(defaultStyles.div1, theme.mode === 'dark' ? defaultStyles.div1Dark : defaultStyles.div1Light)}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {renderStars(rating.rating)}
            {renderTimeAgo(rating.updated_at)}
          </div>
          { (!isLoadingUni || isLoadingPro) && renderEdit()}
        </div>
        <div className={css(defaultStyles.div2)}>
          {rating.comment}
        </div>
      </div>
    </React.Fragment>
  );
};

UserRating.propTypes = {
  rating: PropTypes.object.isRequired,
  isLoadingPro: PropTypes.bool.isRequired,
  isLoadingUni: PropTypes.bool.isRequired,
  actionDeleteUniversityRating: PropTypes.func.isRequired,
  actionDeleteProfessorRating: PropTypes.func.isRequired,
  entity: PropTypes.oneOf([1, 0]).isRequired,
  theme: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  isLoadingUni: state.university.ratings.isLoading,
  isLoadingPro: state.professor.ratings.isLoading,
  theme: state.theme
});
const mapDispatchToProps = {
  actionDeleteUniversityRating: deleteUniversityRating,
  actionDeleteProfessorRating: deleteProfessorRating
};
export default connect(mapStateToProps, mapDispatchToProps)(UserRating);
