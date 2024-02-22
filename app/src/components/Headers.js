import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {appImages} from '../assets/utilities';

//import Settings from '../../assets/svg/Settings.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontiso from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feater from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {purple} from '../utils/Colors';

const Headers = ({
  showBackIcon,
  showText,
  showSearch,
  onPressSearch,
  onPressListings,

  onPressGridView,
  onPressSettings,
  onPressfavourite,
  onPressMenu,
  onPressMenuWhite,
  onPressAdd,
  onPressProfile,
  text,
  showLogo,
  showProfileImage,
  showHeart,
  showMenu,
  showSettings,
  showMenuWhite,
  showAdd,
  showListings,
  showGridView,
  style,
  onPress,
  isFavorite,
  navigation,
}) => {
  return (
    <View style={styles.header}>
      {showBackIcon && (
        <TouchableOpacity style={styles.backArrow} onPress={onPress}>
          <Ionicons name="chevron-back-sharp" size={25} color={purple} />
        </TouchableOpacity>
      )}

      {showListings && (
        <TouchableOpacity style={styles.backArrow} onPress={onPressListings}>
          <Ionicons name="menu" size={25} color="#282828" />
        </TouchableOpacity>
      )}

      {showText && <Text style={[styles.headerText, style]}>{text}</Text>}
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    //justifyContent:'space-between',
    alignItems: 'center',
    //paddingHorizontal:wp(5),
    height: hp(5),
    marginTop: StatusBar.currentHeight - 20,
  },
  headerText: {
    color: purple,
    fontFamily: 'Inter',
    fontWeight: '800',
    fontSize: hp(2.8),
    alignSelf: 'center',
  },
  backArrow: {
    paddingRight: 20, // Add some space on the right side if needed
    paddingLeft: 20,
  },
});
