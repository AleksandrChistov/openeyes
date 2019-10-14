import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import style from './full-screen.styl'

function FullScreen(props) {
  const { likePhoto, unlikePhoto, passParameters, passPhoto } = props;
  let data = props.auth.auth;
  let id = props.fScreen.id;
  const lastPicture = JSON.parse(localStorage.getItem('lastPicture')) || false;
  // let result = 0;
  
  // console.log(props);
  // console.log(id);
  // console.log(data);

  if (data.length === 0) {
    // data = lastPicture; // Отправить в хранилище
    // console.log(lastPicture);
    passPhoto(lastPicture);
    data = lastPicture;
  }
  console.log(data);
  
  if (id === false) {
    if (!lastPicture) {
      return null; // можно сделать редирект на главную
    }
    id = parseInt(props.match.params.number) - 1 || 0;
  }

  localStorage.setItem('lastPicture', JSON.stringify(data));

  let result = data.find((item, i) => i == id);
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
      <div className="wrap-links-full-foto">
        <NavLink className="come-back-fs" to={"/auth"}>&#8592; Вернуться на главную</NavLink>
        <span className="number-full-foto">&#8212; {id + 1} из {data.length} &#8212;</span>
      </div>
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
        {id + 1 !== 1 
        ? <NavLink to={"/full-photo/" + id} className="arrow-left" aria-label="Открыть предыдущее фото" 
        onClick={() => passParameters(id - 1)}>&#171;</NavLink> : null}
        {id + 1 < data.length 
        ? <NavLink to={"/full-photo/" + (id + 2)} className="arrow-right" aria-label="Открыть следующее фото" 
        onClick={() => passParameters(id + 1)}>&#187;</NavLink> : null}
      </div>
    </React.Fragment>
  )
}

export default withRouter(FullScreen);