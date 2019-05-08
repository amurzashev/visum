import { StyleSheet } from 'aphrodite';

const sharedStyles = StyleSheet.create({
  wrap: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 0'
  },
  input: {
    width: '90%',
    height: 40,
    borderRadius: 4,
    border: '1px solid transparent',
    backgroundColor: '#eee',
    marginBottom: 25,
    transition: '0.3s',
    '@media only screen and (min-width: 780px)': {
      width: '50%'
    }
  },
  fieldSet: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2px 10px'
  },
  inputText: {
    outline: 'none',
    border: 0,
    backgroundColor: '#eee',
    width: '100%',
    fontSize: 14
  },
  darkInputText: {
    color: 'black'
  },
  inputTextError: {
    border: '1px solid red'
  },
  button: {
    outline: 'none',
    transition: 'initial',
    color: 'rgb(0, 122, 255)',
    border: '1px solid rgb(0, 122, 255)',
    background: 'transparent',
    ':hover': {
      color: '#fff',
      background: 'rgb(0, 122, 255)'
    }
  },
  button_allowed: {
    cursor: 'pointer'
  },
  button_blocked: {
    cursor: 'not-allowed'
  },
  warning: {
    color: 'red'
  },
  absText: {
    position: 'absolute',
    top: 50,
    color: 'red',
    transition: '0.3s'
  },
  absTextShow: {
    opacity: 1
  },
  absTextHide: {
    opacity: 0,
    transform: 'translate(0, -5px)'
  }
});
export default sharedStyles;
