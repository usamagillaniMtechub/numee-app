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
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomTextInput from '../../components/CustomTextInput';
import {darkGrey, lightGrey, offWhite, purple, white} from '../../utils/Colors';
import CustomButton from '../../components/CustomButton';

export default function ForgetPassword({navigation}) {
  const [continueWithPhoneNumber, setContinueWithPhoneNumber] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,

    onSubmit: async values => {
      // Your form submission logic goes here
      console.log('Form submitted with values:', values);
      handlePress(values);
    },
  });
  const handlePress = values => {
    // Handle button press action
    navigation?.navigate('OTP');
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
              <Text style={styles.signInAccountText}>Forget Password</Text>
            </View>

            <View
              style={{
                marginTop: hp(1),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.signInAccountDescText}>
                Enter email for a verification code
              </Text>
            </View>

            <View
              style={{
                marginTop: hp(2.1),
                justifyContent: 'center',
                marginHorizontal: wp(5),
                alignItems: 'center',
              }}>
              <CustomTextInput
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                left={false}
                right={false}
                placeholder={'Email Address'}
                password={false}
                //leftName="Lock"
              />
            </View>
            {formik.touched.email && formik.errors.email && (
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: wp(5),
                  marginTop: hp(0.5),
                }}>
                <Text
                  style={{color: 'red', marginTop: hp(1), fontSize: hp(1.5)}}>
                  {formik.errors.email}
                </Text>
              </View>
            )}

            <View style={{marginTop: hp(10)}}>
              <CustomButton
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                onPress={handlePress}
                text="Send Code"
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
});
