/* eslint-disable max-len */
import { StyleSheet } from 'aphrodite';

const square = window.innerWidth < 768 ? (window.innerWidth * 90) / 100 : (window.innerWidth * 30) / 100;

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  slide: {
    // mobile screens
    height: window.innerHeight,
    width: window.innerWidth,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  picWrap: {
    height: (window.innerHeight * 70) / 100,
    width: window.innerWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pic: {
    height: square,
    width: square,
    borderRadius: 4,
    backgroundColor: 'transparent'
  },
  text: {
    height: (window.innerHeight * 30) / 100,
    width: window.innerWidth,
    marginTop: 20,
    paddingTop: 20,
    backgroundColor: '#dae0e6'
  },
  whiteText: {
    color: '#000'
  },
  finishButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    cursor: 'pointer'
  }
});
export default styles;
