import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  important: {
    fontSize: 20,
    margin: '10px 0'
  },
  rules: {
    marginTop: 10
  },
  head: {
    fontSize: '2em',
  },
  ul: {
    listStyle: 'inside'
  },
  std: {
    marginBottom: 20,
    ':nth-child(1n) > p': {
      marginBottom: 5
    }
  }
});
export default styles;
