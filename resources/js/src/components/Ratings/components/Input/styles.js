import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  notLoggedInWrap: {
    height: 60,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #a9a9a9',
    padding: '0 20px',
    borderRadius: 4,
    margin: '10px 0',
    '@media only screen and (max-width: 780px)': {
      padding: '0 10px'
    }
  },
  notLoggedInButton: {
    height: 35,
    width: 180,
    borderRadius: 4,
    color: '#007aff',
    border: '1px solid #007aff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ':hover': {
      color: '#1e63ee',
      border: '1px solid #1e63ee',
    },
    '@media only screen and (max-width: 780px)': {
      width: 120
    }
  },
  notLoggedInButtonLight: {
    backgroundColor: 'white',
  },
  notLoggedInButtonDark: {
    backgroundColor: 'transparent'
  }
});
export default styles;
