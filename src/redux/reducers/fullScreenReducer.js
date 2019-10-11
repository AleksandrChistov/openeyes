const initialState = {
  id: false,
  userId: false
}

function fullScreenReducer(state = initialState, action) {
  switch (action.type) {
    case 'PASS_PARAM':
      return {
        id: action.elem,
        userId: state.userId
      }
    case 'LIKE_TOGGLE':
      return {
        id: state.id,
        userId: action.userId
      }
    default:
      return state;
  }
}

export default fullScreenReducer;