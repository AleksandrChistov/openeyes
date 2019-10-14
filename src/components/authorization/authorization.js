import React from 'react';
import style from './authorization.styl'

import Unsplash from 'unsplash-js';


function Authorization(props) { 
  const unsplash = new Unsplash({
    applicationId:  "8187b55cc1e13cb228d48e798baddb4093e5f1714d4d9d479aabc50c5661b040",
    secret:  "f0d76cdc96af00ee01c8d99630308b67dd36fbfa536b7d21730ad043ab7c705a",
    callbackUrl: "https://opeyes.ru/auth"
  });

  const openeyes = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
  ]);

  return (
    <div className="auth-block">
      <p className="title-auth">Авторизуйтесь, чтобы начать пользоваться приложением.</p>
      <button className="btn-auth" onClick={() => {
        localStorage.setItem('loading', "1");
        location.assign(openeyes);
        }}>Authorization in Unsplash</button>
    </div>
  )
}

export default Authorization;