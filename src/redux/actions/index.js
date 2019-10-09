import Unsplash from 'unsplash-js';

export function asynLoad() {
  return (dispatch) => {
    const unsplash = new Unsplash({
      applicationId: "8187b55cc1e13cb228d48e798baddb4093e5f1714d4d9d479aabc50c5661b040",
      secret: "f0d76cdc96af00ee01c8d99630308b67dd36fbfa536b7d21730ad043ab7c705a",
      callbackUrl: "https://halvacard-sovcombank.ru/auth"
    });
  
    const code = location.search.split('code=')[1];
  
    if (code) {
      unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {
          unsplash.auth.setBearerToken(json.access_token);
        });
      unsplash.photos.listPhotos( 1, 10, "latest")
        .then(res => res.json())
        .then(json => {
          dispatch(loadHome(json)); 
      });
    } else {
      dispatch(loadError());
    }
  }
}

function loadHome(result) {
  return {
    type: 'LOAD_HOME',
    result
  }
}

function loadError() {
  return {
    type: 'LOAD_ERROR'
  }
}