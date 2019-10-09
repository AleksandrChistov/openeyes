// import Unsplash from 'unsplash-js';

// function valid() {
//   const unsplash = new Unsplash({
//     applicationId:  "8187b55cc1e13cb228d48e798baddb4093e5f1714d4d9d479aabc50c5661b040",
//     secret:  "f0d76cdc96af00ee01c8d99630308b67dd36fbfa536b7d21730ad043ab7c705a",
//     callbackUrl: "https://halvacard-sovcombank.ru/auth"
//    });
  
//   const code = location.search.split('code=')[1];
  
//   if (code) {
//     unsplash.auth.userAuthentication(code)
//     .then(res => res.json())
//     .then(json => {
//       console.log(json.access_token);
      
//     unsplash.auth.setBearerToken(json.access_token);
//     });
//     return json.access_token;
//   } else {
//     return false;
//   }
// }

const initialState = {
  auth: []
}

function loadReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_HOME':
      return {
        auth: action.result
      }
    default:
      return state;
  }
}

export default loadReducer;