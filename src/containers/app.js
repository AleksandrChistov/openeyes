import React from "react";
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom'

import Header from '../components/header/header';
import Authorization from '../components/authorization/authorization'
import Home from '../components/home/home';
import BtnLoader from '../components/btn-loader/btn-loader';
import FullScreen from '../components/full-screen/full-screen';
import { asynLoad, loadPlus, scrollTopY, passParameters } from "../redux/actions/index";

let App = (props) => {  
  const { asynLoad, auth, loadPlus, scrollTopY, passParameters, fScreen } = props;
  return (
    <React.Fragment>
      <Header/>
      <Route path="/" exact component={Authorization} />
      <Route path="/auth">
        <div className="home-block">
          <Home auth={auth} asynLoad={asynLoad} loadPlus={loadPlus} 
          passParameters={passParameters} scrollTopY={scrollTopY}/>
        </div>
        <BtnLoader auth={auth} loadPlus={loadPlus}/>
      </Route>
      <Route path='/full-photo'><FullScreen fScreen={fScreen} auth={auth}/></Route>
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
    loadPlus: (number, n) => dispatch(loadPlus(number, n)),
    scrollTopY: () => dispatch(scrollTopY()),
    passParameters: (elem) => dispatch(passParameters(elem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);