import React from 'react';
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {SignIn, CreateAccount} from './src/Screens'

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name='SignIn' component={SignIn}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}