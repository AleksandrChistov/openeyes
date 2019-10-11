import Unsplash from 'unsplash-js';

export function asynLoad(number) {
  return (dispatch) => { 
    const unsplash = new Unsplash({
      applicationId: "8187b55cc1e13cb228d48e798baddb4093e5f1714d4d9d479aabc50c5661b040",
      secret: "f0d76cdc96af00ee01c8d99630308b67dd36fbfa536b7d21730ad043ab7c705a",
      callbackUrl: "https://opeyes.ru/auth"
    });
  
    const code = location.search.split('code=')[1];
  
    if (code) {
      unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {
          unsplash.auth.setBearerToken(json.access_token);
        });
      unsplash.photos.listPhotos( number, 10, "latest")
        .then(res => res.json())
        .then(json => {
          dispatch(loadHome(json, number)); 
      });
    } else {
      dispatch(loadError("Недействительный код аутентификации: " + code));
    }
  }
}

export function loadPlus(number, n) {
  return (dispatch) => {    
    const unsplash = new Unsplash({
      applicationId: "8187b55cc1e13cb228d48e798baddb4093e5f1714d4d9d479aabc50c5661b040",
      secret: "f0d76cdc96af00ee01c8d99630308b67dd36fbfa536b7d21730ad043ab7c705a",
      callbackUrl: "https://opeyes.ru/auth"
    });
    unsplash.photos.listPhotos( number, 10, "latest")
      .then(res => res.json())
      .then(json => { 
        dispatch(loadHomePlus(json, number, n));
  });
  }
}

function loadHome(result, number) {
  return {
    type: 'LOAD_HOME',
    result,
    number,
  }
}

function loadHomePlus(result, number, n) {
  return {
    type: 'LOAD_HOME_PLUS',
    result,
    number,
    n
  }
}

function loadError(code) {
  console.log(code);
}

export function scrollTopY() {
  return (dispatch) => {
  let scrollY = Math.ceil(document.body.scrollTop || document.documentElement.scrollTop);
  let windowY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollY === windowY) {
      dispatch(countChecked());
    }
  }
}

function countChecked() {
  return {
    type: 'COUNT_CHECKED'
  }
}

export function passParameters(elem) {
  console.log(elem);
  
  return {
    type: 'PASS_PARAM',
    elem
  }
}