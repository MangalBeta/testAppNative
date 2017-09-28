/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Routes from './src/routes/Routes.js'
import styles from './src/styles/Styles.js'
import Tabs from './src/components/tabs/Tabs';
import Home from './src/components/Home/Home.js';
import Login from './src/components/Auth/Login.js';
import Signup from './src/components/Auth/Signup.js';
export default class reactTutorialApp extends Component {
 render() {
    return (
<View style={styles.mainapp.container}>
       <Tabs>
       {/* First tab */}
       <Home title="HOME"/>
       {/* Second tab */}
       <Login title="LOGIN"/>
       {/* Third tab */}
      <Signup  title="SIGNUP"/>
      </Tabs>
   </View>
    );
  }
}

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);
