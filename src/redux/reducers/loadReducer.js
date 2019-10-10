const initialState = {
  auth: [],
  number: 1,
  count: false
}

function loadReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_HOME':
      return {
        auth: action.result,
        number: action.number,
        count: state.count
      }
    case 'LOAD_HOME_PLUS':
      let s = {...state};
      let authS = [...s.auth];
      action.result.map(data => {
        authS.push(data);
      });
      if (action.n === 0) {
        return {
          auth: authS,
          number: action.number,
          count: state.count
        }
      } else {
        return {
          auth: authS,
          number: action.number,
          count: !state.count
        }
      }
    case 'COUNT_CHECKED':
      return {
        auth: state.auth,
        number: state.number,
        count: !state.count
      }
    default:
      return state;
  }
}

export default loadReducer;