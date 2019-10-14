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
    case "PASS_PHOTO":
      return {
        auth: action.arr,
        number: state.number,
        count: state.count
      }
    case 'LIKE_TOGGLE':
      let allState = {...state};

      if (action.result.liked_by_user) {
        action.result.likes = action.result.likes - 1;
      } else {
        action.result.likes = action.result.likes + 1;
      }
      action.result.liked_by_user = !action.result.liked_by_user;
      
      allState.auth.map(data => {
        if (data.id === action.result.id) {
          data = action.result;
        }
      });
      return {
        auth: allState.auth,
        number: state.number,
        count: state.count
      }         
    default:
      return state;
  }
}

// if (allState.auth.length === 0) { // А может ли он быть равен нулю?
//   allState.auth.push(action.result);
//   console.log(allState.auth);
//   console.log('Массив был пустой, но это нормально');
// } else {

export default loadReducer;