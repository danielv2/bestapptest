import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';

export default class LoginForm extends Component {
  constructor(props) {
      super(props)

      this.state = ({
          email: '',
          password: ''
      })
  }

  signUpUser = (email, password) => {
      try {
          if (this.state.password.length < 6) {
              alert("Please enter atleast 6 characters")
              return;
          }

          firebase.auth().createUserWithEmailAndPassword(email, password)
      }
      catch (error) {
          console.log(error.toString())
      }
  }

  loginUser = (email, password) => {
      try {

          firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
              console.log(user)

          })
      }
      catch (error) {
          console.log(error.toString())
      }
  }

  render() {
    return (
      <View behavior="padding" style={styles.container}>
        <StatusBar barStyle="light-content">

        </StatusBar>
        <TextInput
          placeholder="E-mail" 
          style={styles.input}
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput 
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
          onChangeText={(password) => this.setState({ password })}
        />

        <View style={styles.socialButtonContent}>
          <TouchableOpacity style={styles.socialButtonFacebook}>
            <Text style={styles.buttonTextFacebook}>Facebook </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButtonGoogle}>
            <Image
              style={styles.googleIcon} 
              source={require("../../assets/images/g-login.png")} 
            />
            <Text style={styles.buttonTextGoogle}>Google</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text 
            style={styles.buttonText}
            onPress={() => this.loginUser(this.state.email, this.state.password)}>
              LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#fdcb6e",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: "#000000",
    fontWeight: '700'
  },
  socialButtonContent: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  socialButtonFacebook: {
    backgroundColor: "#3b5998",
    paddingVertical: 10,
    alignItems: 'center',
    height: 35,
    width: 160
  },
  buttonTextFacebook: {
    textAlign: 'center',
    color: "#FFF",
    fontWeight: '700'
  },
  socialButtonGoogle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#FFF",
    paddingVertical: 10,
    alignItems: 'center',
    height: 35,
    width: 160
  },
  buttonTextGoogle: {
    textAlign: 'center',
    color: "#000000",
    fontWeight: '700',
    marginTop: 10,
    fontSize: 16,
    width: 160,
    height: 35
  },
  googleIcon: {
    height: 30,
    width: 30
  },
})