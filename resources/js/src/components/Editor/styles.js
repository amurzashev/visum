import { StyleSheet } from 'aphrodite';

const flashKeyframes = {
  '0%': {
    textShadow: '0'
  },
  '40%': {
    textShadow: '0px 0px 10px rgb(218, 57, 74)'
  },
  '60%': {
    textShadow: '0px 0px 10px rgb(218, 57, 74)'
  },
  '100%': {
    textShadow: '0'
  }
};

const styles = StyleSheet.create({
  inputWrap: {
    border: '1px solid #a9a9a9',
    height: 150,
    width: '100%',
    borderRadius: 4,
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  inputText: {
    height: 120,
    width: '100%',
    borderRadius: 4,
    border: 0,
    outline: 'none',
    padding: 8,
    fontSize: 16,
    resize: 'none'
  },
  submitWrap: {
    height: 30,
    width: '100%',
    borderRadius: '0 0 4px 4px',
    padding: '0 8px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  submitWrapDark: {
    backgroundColor: '#484848'
  },
  submitWrapLight: {
    backgroundColor: '#eff0f5',
  },
  circle: {
    height: 20,
    position: 'absolute',
    width: 'initial',
    bottom: 35,
    right: 8
  },
  submitButton: {
    height: 24,
    width: 60,
    borderRadius: 4,
    outline: 'none',
    backgroundColor: 'transparent'
  },
  canSubmit: {
    border: '1px solid #007aff',
    color: '#007aff',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#007aff',
      color: '#fff'
    }
  },
  cantSubmit: {
    border: '1px solid #8e8e93',
    color: '#8e8e93',
    cursor: 'not-allowed',
  },
  starsWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  errorText: {
    marginLeft: 10,
    color: 'rgb(218, 57, 74)',
    '@media only screen and (max-width: 540px)': {
      fontSize: 10
    }
  },
  errorTextAnmation: {
    animationName: flashKeyframes,
    animationDuration: '1s',
  }
});
export default styles;
