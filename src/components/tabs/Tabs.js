import React,{ Component } from 'react'
import { View,TouchableOpacity, Text,StatusBar,Image, ScrollView,StyleSheet} from 'react-native';
import styles from '../../styles/Styles'
export default class TabComponent extends Component {
     // Initialize State
  state = {
    // First tab is active by default
    activeTab: 0
  }
  // Pull children out of props passed from App component
  render() {
       let tabsList  = null;
       tabsList = this.props.children.map((tab,index)=> {
            return (
                 <TouchableOpacity
                  style={[
                    // Default style for every tab
                    styles.tabsapp.tabContainer,
                    // Merge default style with styles.tabContainerActive for active tab
                    index === this.state.activeTab ? styles.tabsapp.tabContainerActive : []
                  ]}
                  // Change active tab
                  onPress={() => this.setState({ activeTab: index }) }
                  // Required key prop for components generated returned by map iterator
                  key={index}
                >
                  <Text style={styles.tabsapp.tabText}>
                    {tab.props.title}
                  </Text>
                </TouchableOpacity>
            )
       })
    return (
      <View style={styles.tabsapp.container}>
        {/* Tabs row */}
        <View style={styles.tabsapp.tabsContainer}>
          {tabsList}
        </View>
        {/* Content */}
        <View style={styles.tabsapp.contentContainer}>
          {this.props.children[this.state.activeTab]}
        </View>
      </View>
    );
  }
}
