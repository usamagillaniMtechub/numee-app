import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTab from './HomeTab';
import SearchScreen from './SearchScreen';
import Notifications from './Notifications';

const Stack = createNativeStackNavigator();

export default function HomeTabStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
