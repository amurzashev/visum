import React, { Component } from 'react';
import { connect } from 'react-redux';
import IosInformationCircleOutline from 'react-ionicons/lib/IosInformationCircleOutline';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import styles from './styles';
import { Input, Comments, Info } from './components';

class Ratings extends Component {
  state = {
    isVisible: false
  }

  handleNode = (node) => {
    if (node) {
      this.node = node;
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener('touchstart', this.handleOutsideClick, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleClick = () => {
    const { isVisible } = this.state;
    if (!isVisible) {
      document.addEventListener('touchstart', this.handleOutsideClick, false);
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('touchstart', this.handleOutsideClick, false);
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    // alert(`setting to ${!isVisible}`)
    this.setState({ isVisible: !isVisible });
  }


  handleOutsideClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  }

  render() {
    const { entity, theme } = this.props;
    const { isVisible } = this.state;
    return (
      <div className={`card_padding ${css(styles.wrap)} ${entity === 'university' ? 'card_no_max' : 'card'}`}>
        <div className={css(styles.infoWrap)} ref={(node) => { this.handleNode(node); }}>
          <h3>Комментарии</h3>
          <IosInformationCircleOutline onClick={() => { this.handleClick(); }} className={css(styles.icon)} color={theme.mode === 'dark' ? 'white' : 'black'} />
          { isVisible && <Info /> }
        </div>
        <Input {...this.props} />
        <Comments {...this.props} />
      </div>
    );
  }
}

Ratings.propTypes = {
  ratings: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
  entity: PropTypes.oneOf([0, 1]).isRequired,
  theme: PropTypes.object.isRequired
};
const mapStateToProps = state => (
  { account: state.account, universityID: state.university.info.id, theme: state.theme }
);
export default connect(mapStateToProps)(Ratings);
