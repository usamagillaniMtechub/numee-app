import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HomeTab from '../MainStack/HomeTab';
import AddNumbers from '../MainStack/AddNumbers';
import Profile from '../MainStack/Profile';
import MyNumbers from '../MainStack/MyNumbers';

import AddActive from '../../assets/svg/AddActive.svg';
import AddInActive from '../../assets/svg/AddInActive.svg';
import HomeActive from '../../assets/svg/HomeActive.svg';
import HomeInActive from '../../assets/svg/HomeInActive.svg';
import NumbersActive from '../../assets/svg/NumbersActive.svg';
import NumbersInActive from '../../assets/svg/NumberInActive.svg';
import ProfileActive from '../../assets/svg/ProfileActive.svg';
import ProfileInActive from '../../assets/svg/ProfileInActive.svg';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {purple, darkGrey} from '../../utils/Colors';
import HomeTabStack from '../MainStack/HomeTabStack';

const BottomTabNavigation = () => {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      //tabBar={(props) => <CustomTabBar {...props} />} // Use your custom tab bar
      tabBarOptions={
        {
          // ... (other tabBarOptions)
        }
      }
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: '#FFFFFF',
        tabBarInactiveBackgroundColor: '#FFFFFF',
        activeTintColor: purple, // Color of the active tab icon and label
        inactiveTintColor: darkGrey,
        tabBarHideOnKeyboard: true,
        lazy: false, // Set lazy to false to ensure all tabs are rendered
        tabBarStyle: {
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          overflow: 'hidden',
        },
      }}>
      <Bottom.Screen
        options={({focused}) => ({
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeActive width={23} height={23} />
            ) : (
              <HomeInActive width={23} height={23} />
            ),
          tabBarLabel: ({focused}) =>
            focused && <Text style={styles.focusedLabel}>Home</Text>,
        })}
        name="Dashboard"
        component={HomeTabStack}
      />

      <Bottom.Screen
        options={({focused}) => ({
          tabBarIcon: ({focused}) =>
            focused ? (
              <AddActive width={23} height={23} />
            ) : (
              <AddInActive width={23} height={23} />
            ),
          tabBarLabel: ({focused}) =>
            focused && <Text style={styles.focusedLabel}>Add Number</Text>,
        })}
        name="AddNumber"
        component={AddNumbers}
      />

      <Bottom.Screen
        options={({focused}) => ({
          tabBarIcon: ({focused}) =>
            focused ? (
              <NumbersActive width={23} height={23} />
            ) : (
              <NumbersInActive width={23} height={23} />
            ),
          tabBarLabel: ({focused}) =>
            focused && <Text style={styles.focusedLabel}>My Numbers</Text>,
        })}
        name="MyNumbers"
        component={MyNumbers}
      />

      <Bottom.Screen
        options={({focused}) => ({
          tabBarIcon: ({focused}) =>
            focused ? (
              <ProfileActive width={23} height={23} />
            ) : (
              <ProfileInActive width={23} height={23} />
            ),
          tabBarLabel: ({focused}) =>
            focused && <Text style={styles.focusedLabel}>Profile</Text>,
        })}
        name="Profile"
        component={Profile}
      />
    </Bottom.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden', // Ensure the content is clipped to the rounded border
  },
  focusedLabel: {
    color: purple,
    fontSize: wp(2.8),
    marginTop: hp(-1),
  },
  inactiveLabel: {
    color: darkGrey,
    fontSize: wp(2.8),
    marginTop: hp(-1),
  },
});
