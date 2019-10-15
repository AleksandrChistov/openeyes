import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import style from './home.styl'

function Home(props) {
  const { asynLoad, asynLoadRe, auth, loadPlus, scrollTopY, passParameters } = props;
  const unsplash = auth.auth || JSON.parse(localStorage.getItem('lastPicture'));
  const load = parseInt(localStorage.getItem('loading'));

  if(unsplash.length <= 0 && load === 1) {
    localStorage.removeItem('loading');
    asynLoad(1); 
  }

  if(unsplash.length <= 0 && localStorage.getItem('token') && !load) {
    asynLoadRe(1);
  }

  if(unsplash.length <= 0 && !localStorage.getItem('token') && !load) {
    // редирект на страницу авторизации
    return <Redirect to="/" />;
  }

  if(auth.count) {
    loadPlus(auth.number + 1, 1);
  }

  window.addEventListener('scroll', scrollTopY);

  return (
    unsplash.map((data, i) => {
      let d = data.created_at;
      d = d.split('T')[0].split('-').reverse().join(".");

      let styleFotoWrap = "photo-wrap";
      if (unsplash.length % 3 === 2 && data === unsplash[unsplash.length - 1]) {
        styleFotoWrap = "photo-wrap-lastchild";
      }

      let firstName = data.user.first_name || "";
      let lastName = data.user.last_name || "";
      if (firstName.length > 10) {firstName = firstName.substr(0, 8) + "...";};
      if (lastName.length > 10) {lastName = lastName.substr(0, 8) + "...";};
      let name = `${firstName} ${lastName}`;

      let styleLikes = "photo-likes";
      if (data.liked_by_user) {
        styleLikes = "photo-likes-active";
      }
      return (
        <div className={styleFotoWrap} key={i}>
          <a className="show-full-foto" onClick={() => {props.history.push('/full-photo/' + (i + 1)); window.scrollTo(0,0)}}>
            <img onClick={() => passParameters(i)} src={data.urls.small} alt={"Фотография " + data.user.name} 
            className="photo" data-i={i}/></a>
          <div className="cart-image">
            <div className="cart-image__autor">
              <img src={data.user.profile_image.small} alt={"Аватарка " + data.user.name} className="photo-autor"/>
              <a href={data.user.links.html} target="_blank" className="name-autor">{name}</a>
            </div>
            <div className="cart-image__data">
              <time className="date-photo" itemProp="datePublished" dateTime={data.created_at}>{d}</time>
              <span className={styleLikes}>&#10084;</span>
              <span className="number-likes">{data.likes}</span>
            </div>
          </div>
        </div>
      )
    }) 
  )
}

export default withRouter(Home);