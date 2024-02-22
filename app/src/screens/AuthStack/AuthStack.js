import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../AuthScreens/SignIn';
import SignUp from '../AuthScreens/SignUp';
import ForgetPassword from '../AuthScreens/ForgetPassword';
import OTP from '../AuthScreens/OTP';
import ResetPassword from '../AuthScreens/ResetPassword';
import BottomTabNavigation from '../BottomTabs/BottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}} />

      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
