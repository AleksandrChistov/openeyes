import React from "react";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'

import Header from '../components/header/header';
import Authorization from '../components/authorization/authorization'
import Home from '../components/home/home';
import BtnLoader from '../components/btn-loader/btn-loader';
import { asynLoad } from "../redux/actions/index";

let App = (props) => {  
 const { asynLoad, auth } = props;
  return (
    <React.Fragment>
      <Header/>
      <Route path="/" exact component={Authorization} />
      <Route path="/auth">
        <div className="home-block">
          <Home auth={auth} asynLoad={asynLoad}/>
        </div>
        <BtnLoader/>
      </Route>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    auth: state.load
  }
}

function mapDispatchToProps(dispatch) {
  return {
    asynLoad: () => dispatch(asynLoad())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);