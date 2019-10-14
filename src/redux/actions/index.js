import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "8187b55cc1e13cb228d48e798baddb4093e5f1714d4d9d479aabc50c5661b040",
  secret: "f0d76cdc96af00ee01c8d99630308b67dd36fbfa536b7d21730ad043ab7c705a",
  callbackUrl: "https://opeyes.ru/auth"
});

export function asynLoad(number) {
  return (dispatch) => {
    const code = location.search.split('code=')[1];
    if (code) {
      unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {
          unsplash.auth.setBearerToken(json.access_token);
          // Сохраняем токен в LocalStorage
          localStorage.setItem('token', json.access_token);
          unsplash.photos.listPhotos(number, 10, "latest")
          .then(res => res.json())
          .then(json => {
            dispatch(loadHome(json, number)); 
          })
          .catch(err => {
            // Если ошибка, то выводим её на страницу 
            dispatch(errorMessage(err));
          });
        })
        .catch(err => {
          dispatch(errorMessage(err));
        });
    } else {
      dispatch(loadError("Нет кода аутентификации: " + code));
    }
  }
}

export function asynLoadRe(number) {
  return (dispatch) => {
    // Берем токен из localStorage
    let token = localStorage.getItem('token');
    unsplash.auth.setBearerToken(token);
    unsplash.photos.listPhotos(number, 10, "latest")
      .then(res => res.json())
      .then(json => {
        dispatch(loadHome(json, number)); 
      })
      .catch(err => {
        dispatch(errorMessage(err));
      });
  }
}

export function loadPlus(number, n) {
  return (dispatch) => {
    unsplash.photos.listPhotos( number, 10, "latest")
      .then(res => res.json())
      .then(json => { 
        dispatch(loadHomePlus(json, number, n));
      })
      .catch(err => {
        dispatch(errorMessage(err));
      });
  }
}

function loadHome(result, number) {
  return {
    type: 'LOAD_HOME',
    result,
    number
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

export function passParameters(id) {
  return {
    type: 'PASS_PARAM',
    id
  }
}

export function likePhoto(result, props) {
  return (dispatch) => {
    let token = localStorage.getItem('token');
    if (!token) { return props.history.push('/')} // редирект на страницу авторизации
    unsplash.auth.setBearerToken(token);
    unsplash.photos.likePhoto(result.id)
      .then(res => res.json())
      .then(json => {
        dispatch(likeToggle(result)); 
      })
      .catch(err => {
        dispatch(errorMessage(err));
      });
  }
}

export function unlikePhoto(result, props) {
  return (dispatch) => {
    let token = localStorage.getItem('token');
    if (!token) {return props.history.push('/')} // редирект на страницу авторизации
    unsplash.auth.setBearerToken(token);
    unsplash.photos.unlikePhoto(result.id)
      .then(res => res.json())
      .then(json => { 
        dispatch(likeToggle(result));
      })
      .catch(err => {
        dispatch(errorMessage(err));
      });
  }
}

function likeToggle(result) {
  return {
    type: 'LIKE_TOGGLE',
    result
  }
}

export function passPhoto(arr) {
  return {
    type: 'PASS_PHOTO',
    arr
  }
}

function errorMessage(err) {
  let ErrMessage = document.createElement('div');
  ErrMessage.classList.add("erorr");
  ErrMessage.textContent = `Ошибка соединения с сервером.`;
  app.append(ErrMessage);
  setTimeout(() => ErrMessage.remove(), 3000);
  console.log(`Ошибка соединения с сервером: ${err.message}`);
}