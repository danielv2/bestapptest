import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';

import {
	StatusBar,
  Text,
  View,
  StyleSheet,
	PixelRatio,
	Image
} from 'react-native';

import LoginScreen from './Login/LoginScreen';
import SignupScreen from './Login/Signup/SignupScreen';
import FeedScreen from './Main/Feed/FeedScreen';
import SearchScreen from './Main/Search/SearchScreen';
import ProfileScreen from './Main/Profile/ProfileScreen';

const images = {
  feed: require("../assets/images/tab/rose_old.png"),
	search: require("../assets/images/tab/lucky_old.png"),
	profile: require("../assets/images/tab/skull_old.png")
}

class TabIcon extends Component {
  render() {
    return (
			<Image source={images[this.props.iconName]} style={styles.icon}/>
    );
  }
}

export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        {/* <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	        <Scene key="signupScreen"
	          component={SignupScreen}
	          animation='fade'
	          hideNavBar={true}
	        /> */}
					<Scene key="tabbar" tabs={true} tabBarStyle={styles.tabBar} 
							renderLeftButton={<View></View>}
							// hideNavBar={true}
							showLabel={false}
							default="feed"
							hideNavBar={true}>
						<Scene key="feed"
							component={FeedScreen}
							iconName="feed"
							icon={TabIcon}
							animation='fade'
							hideNavBar={true}
						/>
						<Scene key="search"
							component={SearchScreen}
							iconName="search"
							icon={TabIcon}
							animation='fade'
							hideNavBar={true}
						/>
						<Scene key="profile"
							component={ProfileScreen}
							iconName="profile"
							icon={TabIcon}
							animation='fade'
							// hideNavBar={true}
							title = " Perfil "
							// navigationBarStyle = {styles.header}
							// titleStyle = {styles.text}
							// onRight={() => alert("hello")}
							rightButton={
								<Ionicons name="md-settings" 
									size={32} color="black" 
									style={styles.righIcon}	
									onPress={() => alert("hello")}
								/>
							} 
						/>
					</Scene>
	      </Scene>
	    </Router>
	  );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    borderTopColor: 'darkgrey',
    borderTopWidth: 1 / PixelRatio.get(),
    backgroundColor: 'white',
    opacity: 0.98
  },
	icon: {
		width: 48,
		height: 48
	},
	righIcon: {
		paddingRight: 10
	}
});

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};

const titleConfig = {
  title: 'Hello, world',
};