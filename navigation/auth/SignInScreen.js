import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import LoginForm from '../../components/Login/loginForm'

export default class SignInScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo} 
            source={require("../../assets/images/logo.png")} 
          />

          <Text style={styles.title}>Tá na pele - Tattoo~INK</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d3436"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    width: 250,
    height: 100
  },
  title: {
    color: "#FFF",
    marginTop: 1,
    width: 200,
    textAlign: "center",
    opacity: 0.9
  }
})