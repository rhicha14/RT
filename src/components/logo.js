import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';



export default class Logo extends Component {
  render(){
    return(
      <View style={styles.container} >
        <Image
          style={{width:100, height:150}}
          source={require('../images/logo.png')}
        />
        <Text style ={styles.logoText}> 
          Welcome to My App.
        
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    alignItems:'center',
    justifyContent:'center'
  },
  logoText:{
    marginVertical:15,
    fontSize:18,
    color:'rgba(255,255,255,0.7)'

  }
})

