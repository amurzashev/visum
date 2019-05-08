const initialState = {
  isModalOpen: false
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case 'HANDLE_MODAL':
      return { ...state, isModalOpen: action.payload };
    default:
      return state;
  }
}

export default modalReducer;
