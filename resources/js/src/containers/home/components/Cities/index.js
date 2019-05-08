import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { css } from 'aphrodite';
import { loadCities, selectCity } from '../../../../duck/actions/homeActions';
import { Loading, Error } from '../../../../static';
import styles from './styles';

class Cities extends Component {
  static propTypes = {
    actionLoadCities: propTypes.func.isRequired,
    actionSelectCity: propTypes.func.isRequired,
    selectedCity: propTypes.number,
    cities: propTypes.object.isRequired
  }

  static defaultProps = {
    selectedCity: null
  }

  componentDidMount = () => {
    const { actionLoadCities } = this.props;
    actionLoadCities();
  }

  renderCities = () => {
    const {
      actionSelectCity,
      selectedCity,
      cities
    } = this.props;
    if (cities.error) {
      return (
        <Error />
      );
    }
    if (cities.isLoading) {
      return (
        <Loading />
      );
    }
    return (
      <div className={css(styles.listWrap)}>
        {cities.items.map((city, i) => {
          const cityStyle = css(
            styles.city,
            selectedCity === i ? styles.city_selected : styles.city_unselected
          );
          return (
            <div
              key={city.id}
              className={cityStyle}
              onClick={() => actionSelectCity(i)}
              role="button"
              tabIndex={i}
            >
              {city.name}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className={`card card_padding ${css(styles.citiesWrap)}`}>
        <h2>Выберите город</h2>
        {this.renderCities()}
      </div>
    );
  }
}

const mapStateToProps = state => state.cities;

export default connect(mapStateToProps, {
  actionLoadCities: loadCities,
  actionSelectCity: selectCity
})(Cities);
