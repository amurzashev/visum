import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: 'white',
    color: 'black',
    position: 'absolute',
    left: 180,
    top: 20,
    width: 360,
    zIndex: 1,
    '@media only screen and (max-width: 780px)': {
      top: 40,
      left: 10,
      width: window.innerWidth - 30
    }
  },
  list: {
    paddingLeft: 5,
    fontSize: 12,
    fontWeight: 100
  },
  liLink: {
    textDecoration: 'underline',
    ':hover': {
      color: 'black'
    }
  },
  arrow: {
    float: 'right',
    cursor: 'pointer'
  },
  arrowRotate: {
    transform: 'rotate(180deg)'
  },
  darkMode: {
    color: 'black'
  }
});
export default styles;
