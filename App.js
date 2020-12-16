/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import MainScreen from './MainScreen/MainScreen'
import SettingsScreen from './SettingsScreen/SettingsScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>{
      <Stack.Navigator screenOptions={{
        headerShown: false        
      }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    }</NavigationContainer>
    
  )
}
export default App;
