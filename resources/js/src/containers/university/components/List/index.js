import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import MdArrowDropdown from 'react-ionicons/lib/MdArrowDropdown';
import styles from './styles';

class List extends Component {
  static propTypes = {
    professors: propTypes.arrayOf(propTypes.shape({
      id: propTypes.number,
      name: propTypes.string
    })).isRequired,
    isMobile: propTypes.bool.isRequired,
    theme: propTypes.object.isRequired
  }

  state = {
    search: '',
    isListShown: false
  }

  renderProfessors = () => {
    const { professors, theme, isMobile } = this.props;
    const { search } = this.state;
    return (
      professors.map((p) => {
        const compare = p.name.toUpperCase().includes(search.toUpperCase());
        if (compare) {
          return (
            <Link
              to={`/professor/${p.id}`}
              className={css(
                styles.link,
                theme.mode === 'dark' ? styles.linkDark : styles.linkLight,
                isMobile && styles.linkMobile
              )}
              key={`prof${p.id}dick`}
            >
              {p.name}
            </Link>
          );
        }
        return null;
      })
    );
  }

  render() {
    const { search, isListShown } = this.state;
    const { isMobile, theme } = this.props;
    if (isMobile) {
      return (
        <div className={`card card_padding ${css(styles.mobileWrap, theme.mode === 'dark' ? styles.mobileWrapDark : styles.mobileWrapLight)}`}>
          <div className={css(styles.mobileProfs)} onClick={() => this.setState({ isListShown: !isListShown })} role="presentation">
            <h3>Профессоры</h3>
            <MdArrowDropdown color={theme.mode === 'dark' ? 'white' : 'black'} className={css(styles.arrow, isListShown && styles.arrowRotate)} />
          </div>
          {
            isListShown && (
              <div>
                <input className={`card ${css(styles.mobileInput)}`} placeholder="Фильтрация" value={search} onChange={e => this.setState({ search: e.target.value })} />
                <div className={`${css(styles.mobileList)}`}>
                  {this.renderProfessors()}
                </div>
              </div>
            )
          }
        </div>
      );
    }
    return (
      <div className={css(styles.wrap)}>
        <input className={`card ${css(styles.input)}`} placeholder="Фильтрация" value={search} onChange={e => this.setState({ search: e.target.value })} />
        <div className={`card ${css(styles.list)}`}>
          {this.renderProfessors()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ theme: state.theme });
export default connect(mapStateToProps)(List);
