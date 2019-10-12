const initialState = {
  id: false
}

function fullScreenReducer(state = initialState, action) {
  switch (action.type) {
    case 'PASS_PARAM':
      return {
        id: action.id
      }
    default:
      return state;
  }
}

export default fullScreenReducer;