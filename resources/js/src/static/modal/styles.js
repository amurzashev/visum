import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  modal: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 5
  },
  cover: {
    height: '100%',
    width: '100%',
    position: 'relative'
  },
  window: {
    position: 'absolute',
    width: 200,
    backgroundColor: 'white',
    right: 10,
    top: 60,
    borderRadius: 4
  },
  item: {
    height: 40,
    color: '#8e8e93',
    ':not(:last-child)': {
      borderBottom: '1px solid #eee'
    },
    ':hover': {
      color: 'black'
    },
    ':hover:first-child': {
      borderRadius: '4px 4px 0 0'
    },
    ':hover:last-child': {
      borderRadius: '0 0 4px 4px'
    }
  },
  item_link: {
    height: 40,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
    cursor: 'pointer',
    color: '#444444',
    ':hover': {
      color: '#444444',
    }
  },
  li: {
    ':hover': {
      backgroundColor: '#eee'
    },
    ':nth-child(1)': {
      borderRadius: '4px 4px 0 0'
    },
    ':nth-child(4)': {
      borderRadius: '0 0 4px 4px'
    }
  },
  tri: {
    backgroundColor: 'white',
    height: 10,
    width: 10,
    position: 'absolute',
    top: 56,
    right: 30,
    transform: 'rotate(45deg)'
  }
});
export default styles;
