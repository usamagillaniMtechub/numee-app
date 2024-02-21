import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';

import LikeSnackBar from '../assets/svg/LikeSnackBar.svg';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {green, white} from '../utils/Colors';
const CustomSnackbar = ({visible, message, messageDescription, onDismiss}) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false, // Ensure you have this set to false for Android
      }).start();
      const timeout = setTimeout(() => {
        onDismiss();
      }, 3000);

      return () => clearTimeout(timeout);
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [-100, 0], // Slide in from the top
              }),
            },
          ],
        },
      ]}>
      <View style={{marginLeft: wp(3)}}>
        <LikeSnackBar width={30} height={30} />
      </View>

      <Text style={styles.message}>{message}</Text>

      {/*  <TouchableOpacity onPress={onDismiss} style={styles.dismissButton}>
        <Text style={styles.dismissButtonText}>Dismiss</Text>
      </TouchableOpacity> */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60, // Display at the top of the screen
    left: 15,
    right: 15,
    height: hp(5.9),
    borderRadius: 10,
    backgroundColor: green,
    //padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    color: white,
    fontSize: wp(3.2),
    fontWeight: '500',
    marginLeft: wp(2.1),
  },
  messageDescription: {
    color: '#2E2E2E',
    fontSize: wp(3.5),
    fontWeight: '200',
  },
  dismissButton: {
    marginLeft: 16,
  },
  dismissButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomSnackbar;
