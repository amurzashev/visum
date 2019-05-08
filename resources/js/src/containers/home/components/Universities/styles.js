import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  universitiesWrap: {
    marginTop: 20,
  },
  link: {
    height: 35,
    color: '#FF2D55',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    padding: '0 10px',
    margin: '10px 10px 10px 0',
    cursor: 'pointer',
    outline: 'none',
    border: '1px solid #FF2D55',
    ':hover': {
      color: 'white',
      backgroundColor: '#FF2D55'
    }
  },
  linksWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
});
export default styles;
