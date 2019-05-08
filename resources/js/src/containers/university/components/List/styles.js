import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  wrap: {
    paddingLeft: 5
  },
  mobileWrap: {
    margin: '5px 0',
    maxHeight: 250
  },
  mobileWrapLight: {
    backgroundColor: 'white',
  },
  mobileWrapDark: {
    backgroundColor: '#272727'
  },
  input: {
    border: 0,
    outline: 'none',
    height: 30,
    width: '100%',
    padding: '0 10px',
    fontSize: 16,
    position: 'relative'
  },
  mobileInput: {
    border: 0,
    outline: 'none',
    height: 30,
    width: '100%',
    padding: '0 10px',
    fontSize: 16,
    position: 'relative',
    backgroundColor: '#eee',
    boxShadow: 'initial',
    margin: '5px 0'
  },
  list: {
    maxHeight: 360,
    width: '100%',
    marginTop: 5,
    overflow: 'auto'
  },
  mobileList: {
    maxHeight: 150,
    width: '100%',
    marginTop: 5,
    overflow: 'auto'
  },
  link: {
    display: 'flex',
    height: 30,
    alignItems: 'center',
    paddingLeft: 10,
    color: '#8e8e93',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: 16
  },
  linkMobile: {
    paddingLeft: 'initial'
  },
  linkLight: {
    ':hover': {
      color: 'black'
    },
  },
  linkDark: {
    ':hover': {
      color: 'white'
    },
  },
  mobileProfs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  arrow: {
    transition: '0.5s'
  },
  arrowRotate: {
    transform: 'rotate(180deg)'
  }
});
export default styles;
