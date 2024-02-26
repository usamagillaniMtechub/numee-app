import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './app/src/screens/AuthStack/AuthStack';
import BottomTabNavigator from './app/src/screens/BottomTabs/BottomTabNavigator';

import SearchResults from './app/src/screens/MainStack/SearchResults';

import NumberBuyDetail from './app/src/screens/MainStack/NumberBuyDetail';

import MyNumbersDetails from './app/src/screens/MainStack/MyNumbersDetails';

import UpdateProfile from './app/src/screens/MainStack/UpdateProfile';

import ChangePassword from './app/src/screens/MainStack/ChangePassword';

import ContactUs from './app/src/screens/MainStack/ContactUs';

import PrivacyPolicy from './app/src/screens/MainStack/PrivacyPolicy';

import TermsAndCondition from './app/src/screens/MainStack/TermsAndCondition';

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

        <Stack.Screen
          name="NumberBuyDetail"
          component={NumberBuyDetail}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MyNumbersDetails"
          component={MyNumbersDetails}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TermsAndCondition"
          component={TermsAndCondition}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
