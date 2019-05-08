import React, { Component } from 'react';
import { css } from 'aphrodite';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import IosStar from 'react-ionicons/lib/IosStar';
import IosStarOutline from 'react-ionicons/lib/IosStarOutline';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import { addUniversityRating, editUniversityRating } from '../../duck/actions/universityActions';
import { addProfessorRating, editProfessorRating } from '../../duck/actions/professorActions';

class Editor extends Component {
  static propTypes = {
    actionAddUniversityRating: PropTypes.func.isRequired,
    actionAddProfessorRating: PropTypes.func.isRequired,
    actionEditUniversityRating: PropTypes.func.isRequired,
    actionEditProfessorRating: PropTypes.func.isRequired,
    university: PropTypes.object.isRequired,
    professor: PropTypes.object.isRequired,
    account: PropTypes.object.isRequired,
    type: PropTypes.oneOf(['new', 'edit']).isRequired,
    entity: PropTypes.oneOf(['professor', 'university']).isRequired,
    theme: PropTypes.object.isRequired
  }

  state = {
    maxLength: 500,
    value: '',
    stars: 0,
    epmtyStars: false,
    showAnimation: true
  }

  handleChange = (value) => {
    if (value.length <= 500) {
      this.setState({ value });
    }
  }

  handleSetStars = (i) => {
    this.setState({ stars: i + 1, epmtyStars: false });
  }

  renderStars = () => {
    const { stars, epmtyStars, showAnimation } = this.state;
    const votes = [];
    for (let i = 0; i < stars; i++) {
      votes.push(
        <IosStar key={Math.random()} color="#ffcc00" style={{ cursor: 'pointer' }} onClick={() => this.handleSetStars(i)} />
      );
    }
    for (let x = stars; x < 5; x++) {
      votes.push(
        <IosStarOutline key={Math.random()} color="#ffcc00" style={{ cursor: 'pointer' }} onClick={() => this.handleSetStars(x)} />
      );
    }
    const applyStyles = css(styles.errorText, showAnimation && styles.errorTextAnmation);
    const emptyParagraph = (
      <p
        className={applyStyles}
        onAnimationEnd={() => { this.setState({ showAnimation: false }); }}
      >
        Поставьте оценку
      </p>
    );
    return (
      <div className={css(styles.starsWrap)}>
        {votes}
        {epmtyStars && emptyParagraph}
      </div>
    );
  }

  handleSubmitRating = (e) => {
    e.preventDefault();
    const {
      actionAddUniversityRating,
      actionEditUniversityRating,
      actionAddProfessorRating,
      actionEditProfessorRating,
      university,
      professor,
      account,
      type,
      entity
    } = this.props;
    const { value, stars } = this.state;
    if (stars < 1 && value.length > 10) {
      this.setState({ epmtyStars: true, showAnimation: true });
    }
    if (value.length >= 10 && stars > 0) {
      let rating = {
        user_id: account.id,
        rating: stars,
        comment: value,
        entity
      };
      if (entity === 0) { // university
        rating = {
          ...rating,
          entity_id: university.info.id
        };
        if (type === 'new') {
          actionAddUniversityRating(rating);
        } else {
          actionEditUniversityRating(rating);
        }
      }
      if (entity === 1) { // professor
        rating = {
          ...rating,
          entity_id: professor.info.id,
        };
        if (type === 'new') {
          actionAddProfessorRating(rating);
        } else {
          actionEditProfessorRating(rating);
        }
      }
      this.setState({ value: '', stars: 0 });
    }
  }

  renderSubmit = (l) => {
    const { stars } = this.state;
    const extraStyle = (l >= 10 && stars > 0) ? styles.canSubmit : styles.cantSubmit;
    return (
      <input type="submit" className={css(styles.submitButton, extraStyle)} value="OK" />
    );
  }

  render() {
    const { maxLength, value } = this.state;
    const { type, theme } = this.props;
    const percentage = (value.length * 100) / maxLength;
    const circlestyle = percentage > 90 ? { path: { stroke: '#ff3b30' } } : { path: { stroke: '#007aff' } };
    let placeholder;
    if (type === 'new') {
      placeholder = 'Ваш комментарий';
    } else {
      placeholder = 'Изменить комментарий';
    }
    return (
      <form className={css(styles.inputWrap)} onSubmit={e => this.handleSubmitRating(e)}>
        <textarea
          className={css(styles.inputText)}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={e => this.handleChange(e.target.value)}
          style={theme.mode === 'dark' ? { backgroundColor: '#272727' } : {}}
        />
        <CircularProgressbar
          className={css(styles.circle)}
          percentage={percentage}
          styles={circlestyle}
        />
        <div className={css(styles.submitWrap, theme.mode === 'dark' ? styles.submitWrapDark : styles.submitWrapLight)}>
          {this.renderStars()}
          {this.renderSubmit(value.length)}
        </div>
      </form>
    );
  }
}
const mapStateToProps = state => state;
const mapDispatchToProps = {
  actionAddUniversityRating: addUniversityRating,
  actionEditUniversityRating: editUniversityRating,
  actionEditProfessorRating: editProfessorRating,
  actionAddProfessorRating: addProfessorRating
};
export default connect(mapStateToProps, mapDispatchToProps)(Editor);
