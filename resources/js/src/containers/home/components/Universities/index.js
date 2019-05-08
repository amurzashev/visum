import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { css } from 'aphrodite';
import { Link } from 'react-router-dom';
import styles from './styles';


class Universities extends Component {
  static propTypes = {
    selectedCity: propTypes.number,
    cities: propTypes.object.isRequired
  }

  state= {
    universities: null
  }

  static defaultProps = {
    selectedCity: null
  }

  componentDidUpdate = (prevProps) => {
    const { selectedCity, cities } = this.props;
    if (selectedCity !== prevProps.selectedCity) {
      this.setState({ universities: cities.items[selectedCity].universities });
    }
  }

  componentDidMount = () => {
    const { selectedCity, cities } = this.props;
    if (selectedCity !== null) {
      this.setState({ universities: cities.items[selectedCity].universities });
    }
  }

  renderUniversities = () => {
    const { universities } = this.state;
    return (
      <div className={`card card_padding ${css(styles.universitiesWrap)}`}>
        <h2>Университеты</h2>
        <div className={css(styles.linksWrap)}>
          {universities.map(university => (
            <Link key={university.id} to={`/university/${university.id}`} className={css(styles.link)}>{university.name}</Link>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { selectedCity } = this.props;
    const { universities } = this.state;
    if (selectedCity === null || !universities) return null;
    return this.renderUniversities();
  }
}

const mapStateToProps = state => state.cities;

export default connect(mapStateToProps)(Universities);
