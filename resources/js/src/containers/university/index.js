import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { css } from 'aphrodite';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import { Loading, Error } from '../../static';
import { Info, List } from './components';
import { fetchUniversityInfo } from '../../duck/actions/universityActions';
import { Ratings } from '../../components';
import { calculateRating } from '../../helpers/calculateRating';

class University extends Component {
  static propTypes = {
    match: propTypes.shape({ id: propTypes.bool }).isRequired,
    university: propTypes.object,
    actionFetchUniversityInfo: propTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      innerWidth: window.innerWidth
    };
  }

  componentDidMount = () => {
    const { match, actionFetchUniversityInfo, university } = this.props;
    if (String(university.info.id) !== String(match.params.id)) {
      actionFetchUniversityInfo(match.params.id);
    }
    window.addEventListener('resize', this.handleWindowWidth);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowWidth);
  }

  handleWindowWidth = () => {
    this.setState({ innerWidth: window.innerWidth });
  }

  renderMobile = ({ info, professors, ratings }) => (
    <div className={css(styles.mobileInfo)}>
      <Info info={info} rating={info.rating} />
      <List professors={professors} isMobile />
      <Ratings ratings={ratings} entity={0} />
    </div>
  );

  renderDesktop = ({ info, professors, ratings }) => (
    <>
      <div className={css(styles.leftInfo)}>
        <Info info={info} rating={info.rating} />
        <Ratings ratings={ratings} entity={0} />
      </div>
      <div className={css(styles.rightInfo)}>
        <List professors={professors} isMobile={false} />
      </div>
    </>
  )

  renderUniversityInfo = () => {
    const { innerWidth } = this.state;
    const { university } = this.props;
    const { info, professors, ratings } = university;
    const currentRating = calculateRating(ratings.items);
    info.rating = currentRating;
    const isMobile = innerWidth < 781 || false;
    const data = {
      info,
      professors,
      ratings
    };
    return (
      <section className={css(styles.infoWrap)}>
        <Helmet>
          <title>{`${university.info.name} ${university.info.city} Университет`}</title>
        </Helmet>
        {isMobile ? this.renderMobile(data) : this.renderDesktop(data)}
      </section>
    );
  }

  render() {
    const { university } = this.props;
    const { isLoading, error } = university;
    if (error || isLoading) {
      return (
        <section className={`std_container section_padding_std ${css(styles.centered)}`}>
          <div className="card">
            { error ? <Error /> : <Loading /> }
          </div>
        </section>
      );
    }
    return (
      <section className={`std_container section_padding_std ${css(styles.centered)}`}>
        {this.renderUniversityInfo()}
      </section>
    );
  }
}

export default connect(null, { actionFetchUniversityInfo: fetchUniversityInfo })(University);
