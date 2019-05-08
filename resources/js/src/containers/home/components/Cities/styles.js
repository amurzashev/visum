import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  listWrap: {
    display: 'flex',
    flexDirection: 'row',
    userSelect: 'none',
    flexWrap: 'wrap'
  },
  city: {
    height: 35,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    padding: '0 10px',
    margin: '10px 10px 10px 0',
    cursor: 'pointer',
    outline: 'none',
    border: '1px solid #007aff',
  },
  city_selected: {
    backgroundColor: '#007aff',
  },
  city_unselected: {
    color: '#007aff',
  }
});
export default styles;
