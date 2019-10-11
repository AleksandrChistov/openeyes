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

  return (
    <div className="foto-wrap">
      <img src={result.urls.small} alt={"Фотография " + result.user.name} className="foto"/>
      <div className="cart-image">
        <div className="cart-image__autor">
          <img src={result.user.profile_image.small} alt={"Аватарка " + result.user.name} className="foto-autor"/>
          <a href={result.user.links.html} target="_blank" className="name-autor">{result.user.name}</a>
        </div>
        <div className="cart-image__data">
          <time className="date-foto" itemProp="datePublished" dateTime={result.created_at}>{d}</time>
          <img src="img/likes.png" alt="Количество лайков" className="foto-likes"/>
          <span className="number-likes">{result.likes}</span>
        </div>
      </div>
    </div>
  )
}

export default FullScreen;