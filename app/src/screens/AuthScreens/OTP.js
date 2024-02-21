import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {appImages} from '../../utils';
import {useFormik} from 'formik';
import * as yup from 'yup';
import BackButton from '../../assets/svg/BackButton.svg';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomTextInput from '../../components/CustomTextInput';
import {darkGrey, lightGrey, offWhite, purple, white} from '../../utils/Colors';
import CustomButton from '../../components/CustomButton';

export default function OTP({navigation}) {
  const [continueWithPhoneNumber, setContinueWithPhoneNumber] = useState(false);

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const CELL_COUNT = 4;

  const handlePress = values => {
    // Handle button press action
    navigation?.navigate('ResetPassword');
  };
  const handleChangeContinue = () => {
    setContinueWithPhoneNumber(!continueWithPhoneNumber);
  };

  return (
    <ImageBackground
      source={appImages?.imageBackground}
      style={styles.imageBackground}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="" // You can set the StatusBar text color to dark or light
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled">
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(4.3),
            alignItems: 'center',
            paddingLeft: wp(2.8),
            height: hp(8),
          }}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <BackButton width={50} height={50} />
          </TouchableOpacity>
        </View>
        <View style={styles.signInContainer}>
          <View style={styles.signInContainterContent}>
            <View
              style={{
                marginTop: hp(3),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={appImages?.PhoneAuth} // Replace with your image URL
                resizeMode="contain" // Adjust the resizeMode as needed
              />
            </View>

            <View
              style={{
                marginTop: hp(1.5),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.signInAccountText}>Verification</Text>
            </View>

            <View
              style={{
                marginTop: hp(1),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.signInAccountDescText}>
                Enter the code you received on your
              </Text>
            </View>

            <View
              style={{
                marginTop: hp(1),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.signInAccountDescText}>Email Address</Text>
            </View>

            <View style={{marginHorizontal: wp(15)}}>
              <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </View>

            <View style={{marginTop: hp(5)}}>
              <CustomButton
                onPress={handlePress}
                text="Verify"
                //buttonStyle={{ backgroundColor: 'green', width: 200, height: 50 }} // Custom button style
                //textStyle={{ fontSize: 20 }} // Custom text style
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  scrollViewContent: {
    flexGrow: 1, // To enable scrolling
  },
  signInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  signInContainterContent: {
    backgroundColor: 'white',
    height: hp(50),
    width: wp(89),
    borderRadius: wp(3),
  },
  signInText: {
    flexDirection: 'row',
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInAccountText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.5),
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signInAccountDescText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(1.8),
    color: '#767676',
    //fontWeight: '500',
    textAlign: 'center',
  },
  forgetPasswordText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(1.8),
    fontWeight: 'bold',
    color: purple,
    //fontWeight: '500',
    textAlign: 'center',
  },
  orText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(1.8),
    fontWeight: 'bold',
    color: darkGrey,
    //fontWeight: '500',
    textAlign: 'center',
  },
  continueText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(1.8),
    marginLeft: wp(1.8),
    //fontWeight: 'bold',
    color: darkGrey,
    //fontWeight: '500',
    textAlign: 'center',
  },
  signUpDesc: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(1.8),
    //marginLeft: wp(1.8),
    //fontWeight: 'bold',
    color: offWhite,
    //fontWeight: '500',
    textAlign: 'center',
  },
  signUpText: {
    fontFamily: 'Montserrat-Italic',
    marginLeft: wp(1.8),
    fontSize: hp(1.8),
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    //marginLeft: wp(1.8),
    //fontWeight: 'bold',
    color: white,
    //fontWeight: '500',
    textAlign: 'center',
  },

  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderRadius: wp(2),
    backgroundColor: lightGrey,
    //borderWidth: 2,
    //borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: purple,
    borderWidth: 1,
    backgroundColor: white,
  },
});
