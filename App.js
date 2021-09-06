import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform,StatusBar } from 'react-native';
//import Signup from './src/screens/Signup'
import Routes from './src/Routes'

export default class App extends Component {
  render(){ 
  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor="#EEFF41"
        barStyle="dark-content"
        />
        <Routes/>      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CDDC39',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
 
});
