const initialState = {
  auth: [],
  number: 1
}

function loadReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_HOME':
      return {
        auth: action.result,
        number: action.number
      }
    case 'LOAD_HOME_PLUS':
      let s = {...state};
      let auth = [...s.auth];
      action.result.map(data => {
        auth.push(data);
      });
      return {
        auth: auth,
        number: action.number
      }
    default:
      return state;
  }
}

export default loadReducer;