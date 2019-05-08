import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  wrap: {
    borderLeft: '2px solid #8e8e93',
    padding: 20
  },
  insideWrap: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  text: {
    marginBottom: 10
  }
});
export default styles;
