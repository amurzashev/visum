import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './styles';

export default class Search extends Component {
  render() {
    return (
      <div style={{position: 'relative'}}>
        <span className={css(styles.search)}>🚀</span>
        <input className={`card ${css(styles.input)}`} placeholder="Поиск преподавателя"/>
      </div>
    )
  }
}
