import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform,StatusBar } from 'react-native';
import Logo from '../components/logo'
import Form from '../components/form'


export default class Signup extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Logo/>
        <Form/>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an Account? </Text>
          <Text style={styles.signupButton}>Sign in</Text>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CDDC39',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  signupTextCont:{
    flexGrow:1,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText:{
    color:'rgba(255,255,255,0.6)',
    fontSize:16
  },
  signupButton:{
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
  }
 
});