import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {purple} from '../utils/Colors';

const CustomButton = ({onPress, text, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(5),
    borderRadius: wp(5), // Adjust the border radius as per your preference
    backgroundColor: purple, // Default button background color
    //paddingVertical: hp(2), // Default vertical padding
    paddingHorizontal: wp(5), // Default horizontal padding
    height: hp(5.5),
  },
  text: {
    color: 'white', // Default text color
    fontSize: hp(1.8), // Default font size
    fontWeight: 'bold', // Default font weight
  },
});

export default CustomButton;
