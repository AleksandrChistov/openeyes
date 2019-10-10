import React from 'react';
import style from './full-screen.styl'

function FullScreen(props) {
  const elem = props.fScreen.data;

  if (!elem) {
    return null;
  }
  
  const id = elem.querySelector('.foto').dataset.i;
  let autorFoto = elem.querySelector('.foto-autor');
  autorFoto.className = 'foto-autor-fs';
  let name = elem.querySelector('.name-autor');
  name.className = 'name-autor-fs';
  let date = elem.querySelector('.date-foto');
  date.className = 'date-foto-fs';
  let fotoLikes = elem.querySelector('.foto-likes');
  fotoLikes.className = 'foto-likes-fs';
  let nLikes = elem.querySelector('.number-likes');
  nLikes.className = 'number-likes-fs';
  console.log(id);
  console.log(autorFoto);
  console.log(name);
  console.log(date);
  console.log(fotoLikes);
  console.log(nLikes);

  return (
    <h1>Полная страница</h1>
    // unsplash.map((data, i) => {
    //   let d = data.created_at;
    //   d = d.split('T')[0].split('-').reverse().join(".");
    //   return (
    //     <div className="foto-wrap" key={i}>
    //       <img src={data.urls.small} alt={"Фотография " + data.user.name} 
    //       className="foto" data-i={i} onClick={(e) => {
    //         let data = e.target.dataset.i;
    //         console.log(data);
    //       }}/>
    //       <div className="cart-image">
    //         <div className="cart-image__autor">
    //           <img src={data.user.profile_image.small} alt={"Аватарка " + data.user.name} className="foto-autor"/>
    //           <a href={data.user.links.html} target="_blank" className="name-autor">{data.user.name}</a>
    //         </div>
    //         <div className="cart-image__data">
    //           <time className="date-foto" itemProp="datePublished" dateTime={data.created_at}>{d}</time>
    //           <img src="img/likes.png" alt="Количество лайков" className="foto-likes"/>
    //           <span className="number-likes">{data.likes}</span>
    //         </div>
    //       </div>
    //     </div>
    //   )
    // }) 
  )
}

export default FullScreen;