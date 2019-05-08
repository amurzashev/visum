import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  userComment: {
    position: 'relative'
  },
  userCommentDark: {
    backgroundColor: '#4E4C67'
  },
  userCommentLight: {
    backgroundColor: '#CECED5'
  },
  more: {
    cursor: 'pointer',
    position: 'relative',
    height: 24,
    borderRadius: 4,
    color: '#DA394A',
    outline: 'none',
    border: '1px solid #DA394A',
    backgroundColor: 'transparent',
    ':hover': {
      color: '#fff',
      backgroundColor: '#DA394A',
    }
  },
  moreMenu: {
    position: 'absolute',
    backgroundColor: 'white',
    right: 0,
    top: 20,
    width: 120,
    borderRadius: 4,
    boxShadow: '0 0 5px 1px rgba(0,0,0,0.2)',
    padding: 4,
    fontSize: 12
  },
  li: {
    padding: '4px 0',
    ':hover': {
      color: 'black'
    }
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingOverlayDiv: {
    backgroundColor: '#fff',
    padding: '8px 12px',
    borderRadius: 4,
    boxShadow: '0 0 5px 1px rgba(0,0,0,0.2)'
  },
  editorWrap: {
    margin: '10px 0'
  },
  timeAgo: {
    marginLeft: 5,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end'
  }
});
export default styles;
