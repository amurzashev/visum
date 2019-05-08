import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  infoWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  leftInfo: {
    width: '75%',
    '@media screen and (max-width: 1200px)': {
      width: '60%'
    },
    maxWidth: 680
  },
  rightInfo: {
    width: '25%',
    '@media screen and (max-width: 1200px)': {
      width: '40%'
    },
    maxWidth: 300
  },
  mobileInfo: {
    width: '100%'
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});
export default styles;
