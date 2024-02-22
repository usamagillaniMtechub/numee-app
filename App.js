import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './app/src/screens/AuthStack/AuthStack';
import BottomTabNavigator from './app/src/screens/BottomTabs/BottomTabNavigator';

import SearchResults from './app/src/screens/MainStack/SearchResults';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SearchResults"
          component={SearchResults}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
