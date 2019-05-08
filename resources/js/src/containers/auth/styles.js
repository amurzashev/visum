import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    justifyContent: 'center',
  },
  infoWrap: {
    maxWidth: 680,
    maxHeight: 420,
    '@media only screen and (max-width: 780px)': {
      maxHeight: 220
    },
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  h1: {
    textAlign: 'center',
    margin: '15px 0',
    '@media only screen and (max-width: 780px)': {
      margin: '5px 0',
    }
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0,0,0, 0.2)',
    zIndex: 1,
  }
});
export default styles;
