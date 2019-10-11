import React from 'react';
import style from './full-screen.styl'

function FullScreen(props) {
  const data = props.auth.auth;
  const id = props.fScreen.data;

  if (!id) {
    return null;
  }

  let result = data.find((item, i) => i == id);
  console.log(result);
  
  let d = result.created_at;
  d = d.split('T')[0].split('-').reverse().join(".");
  console.log(d);

  let toggleLike = "Поставить" || "Убрать";


  return (
    <div className="foto-wrap-fs">
      <img src={result.urls.full} alt={"Фотография " + result.user.name} className="foto-fs"/>
      <div className="cart-image-fs">
        <div className="cart-image__autor-fs">
          <img src={result.user.profile_image.medium} alt={"Аватарка " + result.user.name} className="foto-autor-fs"/>
          <a href={result.user.links.html} target="_blank" className="name-autor-fs">{result.user.name}</a>
        </div>
        <time className="date-foto-fs" itemProp="datePublished" dateTime={result.created_at}>{d}</time>
        <div className="cart-image__data-fs">
          <button className="toggle-like-fs" aria-label="Поставить лайк или дизлайк">{toggleLike} LIKE</button>
          <img src="img/likes.png" alt="Количество лайков" className="foto-likes-fs"/>
          <span className="number-likes-fs">{result.likes}</span>
        </div>
      </div>
    </div>
  )
}

export default FullScreen;