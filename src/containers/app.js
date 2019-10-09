import React from "react";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'

import Header from '../components/header/header';
import Authorization from '../components/authorization/authorization'
import { asynLoad } from "../redux/actions/index";
import Home from '../components/home/home'

let App = (props) => {  
 const { asynLoad, auth } = props;
  return (
    <React.Fragment>
      <Header/>
      <Route path="/" exact component={Authorization} />
      <Route path="/auth" render={() => <Home auth={auth} asynLoad={asynLoad}/>} />
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