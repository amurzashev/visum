import { StyleSheet } from 'aphrodite';

const defaultStyles = StyleSheet.create({
  stars: {
    display: 'flex',
    flexDirection: 'row'
  },
  div1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 29.55,
    padding: '0 8px',
    alignItems: 'center',
    borderRadius: '4px 4px 0 0'
  },
  div1Light: {
    backgroundColor: 'rgb(239, 240, 245)',
  },
  div1Dark: {
    backgroundColor: 'rgb(72, 72, 72)'
  },
  div2: {
    padding: 12,
    wordWrap: 'break-word'
  },
  comment: {
    border: '1px solid rgb(169, 169, 169)',
    ':not(:last-child)': {
      marginBottom: 10
    },
    borderRadius: 4
  },
});

export default defaultStyles;
