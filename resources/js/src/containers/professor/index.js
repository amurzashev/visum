import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import propTypes from 'prop-types';
import { css } from 'aphrodite';
import { connect } from 'react-redux';
import styles from './styles';
import { Loading, Error } from '../../static';
import { Info } from './components';
import { Ratings } from '../../components';
import { fetchProfessorInfo } from '../../duck/actions/professorActions';
import { calculateRating } from '../../helpers/calculateRating';


class Professor extends Component {
  static propTypes = {
    match: propTypes.object.isRequired,
    professor: propTypes.object.isRequired,
    actionFetchProfessorInfo: propTypes.func.isRequired
  }

  componentDidMount = () => {
    const { match, actionFetchProfessorInfo } = this.props;
    actionFetchProfessorInfo(match.params.id);
  }

  renderProfessorPage = () => {
    const { professor } = this.props;
    const { info, ratings } = professor;
    const currentRating = calculateRating(ratings.items);
    return (
      <Fragment>
        <Info info={info} rating={currentRating} />
        <Ratings ratings={ratings} entity={1} />
      </Fragment>
    );
  }

  render() {
    const { professor } = this.props;
    const { isLoading, error } = professor;
    if (error || isLoading) {
      return (
        <div className={`${css(styles.wrap)} std_container section_padding_std`}>
          <div className="card">
            { error ? <Error /> : <Loading /> }
          </div>
        </div>
      );
    }
    const title = `${professor.info.name} профессор ${professor.info.university}`;
    return (
      <section className="section_padding_std std_container center_down">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {this.renderProfessorPage()}
      </section>
    );
  }
}
export default connect(null, { actionFetchProfessorInfo: fetchProfessorInfo })(Professor);
