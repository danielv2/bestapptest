import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import {
	StatusBar,
  Text,
  View,
  StyleSheet,
  PixelRatio,
} from 'react-native';

import LoginScreen from './Login/LoginScreen';
import SignupScreen from './Login/Signup/SignupScreen';
import FeedScreen from './Main/Feed/FeedScreen';
import SearchScreen from './Main/Search/SearchScreen';
import ProfileScreen from './Main/Profile/ProfileScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

//Create a dedicated class that will manage the tabBar icon
class TabIcon extends Component {
  render() {
    var color = this.props.selected ? '#00f240' : '#301c2a';

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon style={{color: color}} name={this.props.iconName || "circle"} size={18}/>
        <Text style={{color: color, fontSize: 12}}>{this.props.title}</Text>
      </View>
    );
  }
}

export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	        <Scene key="signupScreen"
	          component={SignupScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
					<Scene key="tabbar" tabs={true} tabBarStyle={styles.tabBar} default="feed">
						<Scene key="feed" title="feed">
							<Scene key="feedScreen"
								component={FeedScreen}
								icon={({ focused }) => (
									<Icon
										 style={{ width: 30 }}
										 name={focused ? 'profile-active' : 'profile'}
										 size={30}
										 color={focused ? '#FFC920' : '#353535'}
									/>
								)}
								animation='fade'
								hideNavBar={true}
								initial
							/>
						</Scene>
						<Scene key="search" title="search">
							<Scene key="searchScreen"
								component={SearchScreen}
								icon={({ focused }) => (
									<Icon
										 style={{ width: 30 }}
										 name={focused ? 'profile-active' : 'profile'}
										 size={30}
										 color={focused ? '#FFC920' : '#353535'}
									/>
								)}
								animation='fade'
								hideNavBar={true}
							/>
						</Scene>
						<Scene key="profile" title="profile">
							<Scene key="profileScreen"
								component={ProfileScreen}
								icon={({ focused }) => (
									<Icon
										 style={{ width: 30 }}
										 name={focused ? 'profile-active' : 'profile'}
										 size={30}
										 color={focused ? '#FFC920' : '#353535'}
									/>
								)}
								animation='fade'
								hideNavBar={true}
								initial
							/>
						</Scene>
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
    backgroundColor: 'ghostwhite',
    opacity: 0.98
  },
  navigationBarStyle: {
    backgroundColor: 'red',
  },
  navigationBarTitleStyle: {
    color:'white',
  },
});