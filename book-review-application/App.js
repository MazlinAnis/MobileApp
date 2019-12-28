import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import SignupScreen from "./Screens/SignUp";
import LoginScreen from "./Screens/LogIn";
import HomeScreen from "./Screens/HomeScreen";
import TFIOSScreen from "./Screens/TFIOSScreen";
import TLOTRScreen from "./Screens/TLOTRScreen";
import HobbitScreen from "./Screens/HobbitScreen";
import RJScreen from "./Screens/RJScreen";
import AddBookScreen from "./Screens/AddBookScreen";
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDmiLSZuBorhOqTl1noxOEr-h4p8hifLAQ",
  authDomain: "mobileapp-65aa7.firebaseapp.com",
  databaseURL: "https://mobileapp-65aa7.firebaseio.com",
  projectId: "mobileapp-65aa7",
  storageBucket: "mobileapp-65aa7.appspot.com",
  messagingSenderId: "257259875226",
  appId: "1:257259875226:web:9cff797782587ecfc76823",
  measurementId: "G-1YX5YLJ046"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const RootStack = createStackNavigator(
  {
    SignUp: SignupScreen,
    LogIn: LoginScreen,
    Home: HomeScreen,
    TFIOS: TFIOSScreen,
    TLOTR: TLOTRScreen,
    Hobbit: HobbitScreen,
    RJ: RJScreen,
    AddBook: AddBookScreen
  },
  {
    initialRouteName: 'LogIn'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
       <AppContainer />
    );
  }
}