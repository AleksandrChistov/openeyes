const initialState = {
  data: null
}

function fullScreenReducer(state = initialState, action) {
  switch (action.type) {
    case 'PASS_PARAM':
      console.log(action.elem);
      
      return {
        data: action.elem
      }
    default:
      return state;
  }
}

export default fullScreenReducer;