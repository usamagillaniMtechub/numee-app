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
import Phone from '../../assets/svg/Phone.svg';
import Mail from '../../assets/svg/Mail.svg';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomTextInput from '../../components/CustomTextInput';
import {darkGrey, lightGrey, offWhite, purple, white} from '../../utils/Colors';
import CustomButton from '../../components/CustomButton';

export default function SignIn({navigation}) {
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
    navigation?.replace('Main');
  };
  const handleChangeContinue = () => {
    setContinueWithPhoneNumber(!continueWithPhoneNumber);
  };

  return (
    <ImageBackground
      source={appImages?.imageBackground}
      style={styles.imageBackground}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled">
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
              <Text style={styles.signInAccountText}>Sign In to Account</Text>
            </View>

            <View
              style={{
                marginTop: hp(1),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.signInAccountDescText}>
                {continueWithPhoneNumber === true
                  ? 'Enter email and password to continue'
                  : 'Enter Number and password to continue'}
              </Text>
            </View>

            <View
              style={{
                marginTop: hp(1),
                justifyContent: 'center',
                marginHorizontal: wp(5),
                alignItems: 'center',
              }}>
              {continueWithPhoneNumber === true ? (
                <CustomTextInput
                  onChangeText={formik.handleChange('phoneNumber')}
                  onBlur={formik.handleBlur('phoneNumber')}
                  keyboardType="numeric"
                  left={false}
                  right={false}
                  placeholder={'Phone Number'}
                  password={false}
                  //leftName="Lock"
                />
              ) : (
                <CustomTextInput
                  onChangeText={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')}
                  left={false}
                  right={false}
                  placeholder={'Email Address'}
                  password={false}
                  //leftName="Lock"
                />
              )}
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
            <View
              style={{
                justifyContent: 'center',
                marginHorizontal: wp(5),
                alignItems: 'center',
              }}>
              <CustomTextInput
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                left={true}
                right={true}
                placeholder={'Password'}
                password={true}
                leftName="Lock"
              />
            </View>

            {formik.touched.password && formik.errors.password && (
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: wp(5),
                  marginTop: hp(0.5),
                }}>
                <Text
                  style={{color: 'red', marginTop: hp(1), fontSize: hp(1.5)}}>
                  {formik.errors.password}
                </Text>
              </View>
            )}

            <View
              style={{
                flexDirection: 'row',
                marginTop: hp(1),
                height: hp(3),
                justifyContent: 'flex-end',
                paddingRight: wp(5),
              }}>
              <TouchableOpacity
                onPress={() => navigation?.navigate('ForgetPassword')}>
                <Text style={styles.forgetPasswordText}>Forget Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: hp(2.1)}}>
              <CustomButton
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                onPress={handlePress}
                text="Sign In"
                //buttonStyle={{ backgroundColor: 'green', width: 200, height: 50 }} // Custom button style
                //textStyle={{ fontSize: 20 }} // Custom text style
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: wp(8),
                marginTop: hp(1.8),
                height: hp(3),
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  width: '39%',
                  height: 0.5,
                  backgroundColor: darkGrey,
                }}></View>
              <Text style={styles.orText}>Or</Text>

              <View
                style={{
                  width: '39%',
                  height: 0.5,
                  backgroundColor: darkGrey,
                }}></View>
            </View>

            <TouchableOpacity
              onPress={() => handleChangeContinue()}
              style={{
                flexDirection: 'row',
                marginTop: hp(2.1),
                alignItems: 'center',
                justifyContent: 'center',
                height: hp(5),
                marginHorizontal: wp(8),
                backgroundColor: lightGrey,
                borderRadius: wp(3),
              }}>
              <Phone width={15} height={15} />

              <Text style={styles.continueText}>
                Continue with Phone Number
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.signInText}>
          <Text style={styles.signUpDesc}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation?.navigate('SignUp')}>
            <Text style={styles.signUpText}>Sign Up </Text>
          </TouchableOpacity>
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
    height: hp(71),
    width: wp(80),
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
    fontSize: hp(2.8),
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
