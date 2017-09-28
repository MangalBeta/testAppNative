import React from 'react'
import {Router, Scene }  from 'react-native-router-flux'
import Home from '../components/Home/Home.js'
import Login from '../components/Auth/Login.js'
import Signup from '../components/Auth/Signup.js'

const Routes = ()=> {
     return (
          <Router>
          <Scene key="root">
               <Scene key="home" component= {Home} title="Home" initial ={true}/>
               <Scene key="login" component= {Login} title="Login" />
               <Scene key="signup" component= {Signup} title="Signup" />
          </Scene>
          </Router>
     )
}

export default Routes;
