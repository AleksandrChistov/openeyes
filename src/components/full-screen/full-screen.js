import React from 'react';
import style from './full-screen.styl'

function FullScreen(props) {
  const { likePhoto, unlikePhoto } = props;
  let data = props.auth.auth;
  let id = props.fScreen.id;
  const lastPicture = JSON.parse(localStorage.getItem('lastPicture')) || null;
  let result = 0;
console.log(lastPicture);

  if (!id) {
    if (!lastPicture) {
      return null;
    }
    if (data.length === 0) {
      result = lastPicture;
    }
    id = 0;
  }

  console.log(data);
  

  if (result !== lastPicture) {
    result = data.find((item, i) => i == id);
    localStorage.setItem('lastPicture', JSON.stringify(result));
  }
  
  let d = result.created_at;
  d = d.split('T')[0].split('-').reverse().join(".");

  let toggleLike = "Поставить";
  let funToggleLike = likePhoto;
  let styleLikes = "photo-likes-fs";

  if (result.liked_by_user) {
    toggleLike = "Убрать";
    funToggleLike = unlikePhoto;
    styleLikes = "photo-likes-fs-active";
  }

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
            <button className="toggle-like-fs" onClick={() => funToggleLike(result)}>{toggleLike} LIKE</button>
            <span className={styleLikes}>&#10084;</span>
            <span className="number-likes-fs">{result.likes}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FullScreen;