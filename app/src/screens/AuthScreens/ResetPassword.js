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
import CustomSnackbar from '../../components/CustomSnackBar';

export default function OTP({navigation}) {
  const [continueWithPhoneNumber, setContinueWithPhoneNumber] = useState(false);

  const [snackbarVisible, setsnackbarVisible] = useState(false);

  const dismissSnackbar = () => {
    setsnackbarVisible(false);
  };

  const handleUpdatePasswordAlert = async () => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setsnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setsnackbarVisible(false);
      navigation.replace('SignIn');
    }, 3000);
  };

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
    handleUpdatePasswordAlert();
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
              <Text style={styles.signInAccountText}>Reset Password</Text>
            </View>

            <View
              style={{
                marginTop: hp(1),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.signInAccountDescText}>
                Create a strong password to enhance the
              </Text>
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.signInAccountDescText}>
                security of your account
              </Text>
            </View>

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
                justifyContent: 'center',
                marginHorizontal: wp(5),
                alignItems: 'center',
              }}>
              <CustomTextInput
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                left={true}
                right={true}
                placeholder={'Confirm Password'}
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

            <View style={{marginTop: hp(5.9)}}>
              <CustomButton
                onPress={handlePress}
                text="Reset Password"
                //buttonStyle={{ backgroundColor: 'green', width: 200, height: 50 }} // Custom button style
                //textStyle={{ fontSize: 20 }} // Custom text style
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <CustomSnackbar
        message={'Password reset successfully!'}
        onDismiss={dismissSnackbar} // Make sure this function is defined
        visible={snackbarVisible}
      />
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
    height: hp(59),
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
