import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  wrap: {
    margin: '5px 0 10px 0',
    position: 'relative'
  },
  infoWrap: {
    display: 'flex',
    flexDirection: 'row'
  },
  icon: {
    marginLeft: 10,
    cursor: 'pointer'
  },
  commentWrap: {
    width: '100%',
    minHeight: 120,
    borderRadius: 4,
    padding: 5,
    marginBottom: 10
  },
  commentsWrap: {
    marginTop: 10
  },
  starsWrap: {
    display: 'flex',
    flexDirection: 'row',
  },
  textWrap: {
    fontSize: 16,
    fontWeight: 200,
    margin: 5
  },
  accountTextWrap: {
    fontSize: 18,
    fontWeight: 200,
    margin: 5
  },
  dateWrap: {
    margin: 5,
    fontWeight: 200,
    fontSize: 12
  },
  accountDateWrap: {
    margin: 5,
    fontWeight: 200,
    fontSize: 14
  },
  accountEditWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  editWrap: {
    ':hover': {
      cursor: 'pointer',
      backgroundColor: '#eee'
    },
    borderRadius: 4,
    transition: '0.5s',
    padding: 3
  }
});
export default styles;
