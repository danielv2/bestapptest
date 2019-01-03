import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from './auth/AuthLoadingScreen';
import SignInScreen from './../components/Login/Main';
// import SignInScreen from './auth/SignInScreen';

const AuthStack = createStackNavigator(
  { 
    SignIn: {
      screen: SignInScreen,
      navigationOptions: {
        header: null
      }
    }
  }
);

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

// export default createAppContainer(createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     App: AppStack,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// ));