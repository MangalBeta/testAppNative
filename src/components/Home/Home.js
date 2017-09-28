import React,{Component}from 'react'
import { View,TouchableOpacity, Text,StatusBar,Image, ScrollView} from 'react-native';

import { Actions } from 'react-native-router-flux';
import styles from '../../styles/Styles'
const namesArry = [{ id: 0, name: 'Ben',image :'https://www.rover.com/blog/wp-content/uploads/2016/07/pug-superheroes.jpg'},
{id: 1,name: 'Susan',image :'https://www.what-dog.net/Images/faces2/scroll0011.jpg' },
{id: 2, name: 'Robert',image :'http://www.dw.com/image/36553143_303.jpg'},
{id: 3, name: 'Ajay',image :'http://idealog.co.nz/media/VERSIONS/articles/2017/06/dogs9617_1200x1200.jpg'},
{id:4, name: 'Arsad',image :'http://images4.fanpop.com/image/photos/18700000/Pomeranian-all-small-dogs-18774613-500-400.jpg'
}]
class Home extends Component {
 constructor(props){
      super(props)
      this.state = {
           names : '',
      }
      this.goToSignup= this.goToSignup.bind(this)
      this.alertItemName = this.alertItemName.bind(this)
   }

goToSignup(){
     Actions.signup()
}
alertItemName(item){
     alert(item.name)
}
  render(){
        let Listview = null;
        Listview = namesArry.map((item, index) => (
                        <View key = {item.id} style = {styles.homelistViewCon}>
                              <Image source = {{ uri:`${item.image}`}} style ={styles.imageText}/>
                     </View>
                ))
        return (
             <View  style={styles.mainapp.content}>
               <Text style={styles.mainapp.header}>
                 Welcome to React Native
               </Text>
               <Text style={styles.mainapp.text}>
                 The best technology to build cross platform mobile apps with
               </Text>
             </View>
        )
          }
   }


export default Home
