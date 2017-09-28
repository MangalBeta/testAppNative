import React,{ Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';
import styles from '../../styles/Styles'
class Login extends Component {
     constructor(props){
          super(props)
     this.state = {
           email: '',
           password: ''
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
     }

   handleEmail(text){
      this.setState({ email: text })
   }
   handlePassword(text){
      this.setState({ password: text })
   }
   login(email, pass){
      alert('email: ' + email + ' password: ' + pass)
       Actions.home();
   }
   render(){
        return (
             <View  style={styles.mainapp.content}>
               <Text style={styles.mainapp.header}>
                Login
               </Text>
               <Text style={styles.mainapp.text}>
                 Components you define will end up rendering as native platform widgets
               </Text>
             </View>
        )
   }

}
export default Login
