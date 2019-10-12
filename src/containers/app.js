import React from "react";
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom'

import Header from '../components/header/header';
import Authorization from '../components/authorization/authorization'
import Home from '../components/home/home';
import BtnLoader from '../components/btn-loader/btn-loader';
import FullScreen from '../components/full-screen/full-screen';
import { asynLoad, asynLoadRe, loadPlus, scrollTopY, passParameters, 
  likePhoto, unlikePhoto } from "../redux/actions/index";

let App = (props) => {  
  const { asynLoad, asynLoadRe, auth, loadPlus, scrollTopY, passParameters, fScreen, likePhoto, unlikePhoto } = props;
  return (
    <React.Fragment>
      <Header/>
      <Route path="/" exact component={Authorization} />
      <Route path="/auth">
        <div className="home-block">
          <Home auth={auth} asynLoad={asynLoad} asynLoadRe={asynLoadRe} loadPlus={loadPlus} 
          passParameters={passParameters} scrollTopY={scrollTopY}/>
        </div>
        <BtnLoader auth={auth} loadPlus={loadPlus}/>
      </Route>
      <Route path='/full-photo'><FullScreen fScreen={fScreen} auth={auth} 
      likePhoto={likePhoto} unlikePhoto={unlikePhoto}/></Route>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    auth: state.load,
    fScreen: state.fScreen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    asynLoad: (number) => dispatch(asynLoad(number)),
    asynLoadRe: (number) => dispatch(asynLoadRe(number)),
    loadPlus: (number, n) => dispatch(loadPlus(number, n)),
    scrollTopY: () => dispatch(scrollTopY()),
    passParameters: (id) => dispatch(passParameters(id)),
    likePhoto: (userId) => dispatch(likePhoto(userId)),
    unlikePhoto: (userId) => dispatch(unlikePhoto(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);