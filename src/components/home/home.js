import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import style from './home.styl'

function Home(props) {
  const { asynLoad, auth, loadPlus, scrollTopY, passParameters } = props;
  const unsplash = auth.auth;

  if(unsplash.length <= 0) {
    asynLoad(1);
  }

  if(auth.count) {
    loadPlus(auth.number + 1, 1);
  }

  window.addEventListener('scroll', scrollTopY);

  return (
    unsplash.map((data, i) => {
      let d = data.created_at;
      d = d.split('T')[0].split('-').reverse().join(".");
      return (
        <div className="photo-wrap" key={i}>
          <NavLink to="/full-photo"><img onClick={(e) => passParameters(e.target.dataset.i)} 
          src={data.urls.small} alt={"Фотография " + data.user.name} 
          className="photo" data-i={i}/></NavLink>
          <div className="cart-image">
            <div className="cart-image__autor">
              <img src={data.user.profile_image.small} alt={"Аватарка " + data.user.name} className="photo-autor"/>
              <a href={data.user.links.html} target="_blank" className="name-autor">{data.user.name}</a>
            </div>
            <div className="cart-image__data">
              <time className="date-photo" itemProp="datePublished" dateTime={data.created_at}>{d}</time>
              <img src="img/likes.png" alt="Количество лайков" className="photo-likes"/>
              <span className="number-likes">{data.likes}</span>
            </div>
          </div>
        </div>
      )
    }) 
  )
}

export default Home;