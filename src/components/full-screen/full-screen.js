import React from 'react';
import style from './full-screen.styl'

function FullScreen(props) {
  let data = props.auth.auth;
  let id = props.fScreen.data;
  const lastPicture = JSON.parse(localStorage.getItem('lastPicture')) || false;
  let result;

  if (!id) {
    if (!lastPicture) {
      return null;
    }
    id = 0;
    result = lastPicture;
  }

  if (result !== lastPicture) {
    result = data.find((item, i) => i == id);
    localStorage.setItem('lastPicture', JSON.stringify(result));
  }
  
  let d = result.created_at;
  d = d.split('T')[0].split('-').reverse().join(".");

  let toggleLike = "Поставить" || "Убрать";

  return (
    <React.Fragment>
      <button className="come-back-fs" onClick={() => window.history.back()}>&#8592; Вернуться назад</button>
      <div className="photo-wrap-fs">
        <img src={result.urls.full} alt={"Фотография " + result.user.name} className="photo-fs"/>
        <div className="cart-image-fs">
          <div className="cart-image__autor-fs">
            <img src={result.user.profile_image.medium} alt={"Аватарка " + result.user.name} className="photo-autor-fs"/>
            <a href={result.user.links.html} target="_blank" className="name-autor-fs">{result.user.name}</a>
          </div>
          <time className="date-photo-fs" itemProp="datePublished" dateTime={result.created_at}>{d}</time>
          <div className="cart-image__data-fs">
            <button className="toggle-like-fs">{toggleLike} LIKE</button>
            <img src="img/likes.png" alt="Количество лайков" className="photo-likes-fs"/>
            <span className="number-likes-fs">{result.likes}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FullScreen;