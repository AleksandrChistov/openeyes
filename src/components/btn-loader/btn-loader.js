import React from 'react';
import style from './btn-loader.styl';

function BtnLoader(props) {
  const { auth, loadPlus } = props; 
  return (
    <button onClick={(props) => loadPlus(auth.number + 1, 0)} className="btn-loader">Загрузить ещё...</button>
  )
}

export default BtnLoader;