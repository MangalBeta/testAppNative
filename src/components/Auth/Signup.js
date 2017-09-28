import React,{ Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';
import styles from '../../styles/Styles.js'
class Signup extends Component {
     constructor(props){
          super(props)
     this.state = {
          name : '',
           email: '',
           password: ''
        }
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
     }
      handleName(text){
           this.setState({ name: text })
      }
     handleEmail(text){
     this.setState({ email: text })
     }
     handlePassword(text){
     this.setState({ password: text })
     }
     signup(name,email, pass){
      alert('name' + name + 'email: ' + email + ' password: ' + pass)
      Actions.login();
     }
     render(){
        return (
             <View  style={styles.mainapp.content}>
               <Text style={styles.mainapp.header}>
               Signup
               </Text>
               <Text style={styles.mainapp.text}>
                 It’s much easier to read and write comparing to native platform’s code
               </Text>
             </View>
        )
     }

}
export default Signup
