import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  black,
  blazeWhite,
  borderGrey,
  darkGrey,
  purple,
  white,
} from '../../utils/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import UserActive from '../../assets/svg/UserActive.svg';
import LinearGradient from 'react-native-linear-gradient';

import UserInAtive from '../../assets/svg/UserInactive.svg';
import Lock from '../../assets/svg/Lock.svg';
import Arrow from '../../assets/svg/Arrow.svg';
import Contact from '../../assets/svg/Contact.svg';
import File from '../../assets/svg/File.svg';
import LogOut from '../../assets/svg/LogOutGrey.svg';
import DeleteGrey from '../../assets/svg/DeleteGrey.svg';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={white} />
      <View style={styles.cardContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: hp(6.5),
          }}>
          <Text style={[styles.signInAccountText, {color: purple}]}>
            My Profile
          </Text>
        </View>
      </View>

      <LinearGradient
        colors={['#585CF1', '#8B64DC']}
        style={{
          flexDirection: 'row',
          marginHorizontal: wp(8),
          marginTop: hp(5),
          height: hp(10),
          alignItems: 'center',
          borderRadius: wp(5),
        }}>
        <View
          style={{
            width: wp(12),
            marginLeft: wp(3),
            justifyContent: 'center',
            alignItems: 'center',
            height: wp(12),
            borderRadius: wp(12) / 2,
            backgroundColor: white,
          }}>
          <UserActive width={20} height={20} />
        </View>

        <View
          style={{
            height: hp(5.7),
            marginLeft: wp(3),
            justifyContent: 'space-between',
          }}>
          <Text style={styles.phoneNumberText}>John Doe</Text>

          <Text style={styles.phoneNumberTextDesc}>Johndoe123@gmail.com</Text>
        </View>
      </LinearGradient>

      <TouchableOpacity
        onPress={() => navigation?.navigate('UpdateProfile')}
        style={{
          flexDirection: 'row',
          height: hp(5),
          marginTop: hp(1.8),
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: wp(8),
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wp(3),
            alignItems: 'center',
            width: wp(39),
          }}>
          <UserInAtive width={18} height={18} />

          <Text style={styles.menuDesc}>Update Profile</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingRight: wp(3),
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <Arrow width={18} height={18} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: hp(5),
          marginTop: hp(1.5),
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: wp(8),
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wp(3),
            alignItems: 'center',
            width: wp(39),
          }}>
          <Lock width={18} height={18} />

          <Text style={styles.menuDesc}>Change Password</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingRight: wp(3),
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <Arrow width={18} height={18} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: hp(5),
          marginTop: hp(1.5),
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: wp(8),
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wp(3),
            alignItems: 'center',
            width: wp(39),
          }}>
          <Contact width={18} height={18} />

          <Text style={styles.menuDesc}>Contact Us</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingRight: wp(3),
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <Arrow width={18} height={18} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: hp(5),
          marginTop: hp(1.5),
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: wp(8),
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wp(3),
            alignItems: 'center',
            width: wp(39),
          }}>
          <Lock width={18} height={18} />

          <Text style={styles.menuDesc}>Privacy Policy</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingRight: wp(3),
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <Arrow width={18} height={18} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: hp(5),
          marginTop: hp(1.5),
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: wp(8),
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wp(3),
            alignItems: 'center',
            width: wp(39),
          }}>
          <File width={18} height={18} />

          <Text style={styles.menuDesc}>Terms & Conditions</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingRight: wp(3),
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <Arrow width={18} height={18} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: hp(5),
          marginTop: hp(1.5),
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: wp(8),
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wp(3),
            alignItems: 'center',
            width: wp(39),
          }}>
          <LogOut width={18} height={18} />

          <Text style={styles.menuDesc}>Logout</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingRight: wp(3),
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <Arrow width={18} height={18} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: hp(5),
          marginTop: hp(1.5),
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: wp(8),
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wp(3),
            alignItems: 'center',
            width: wp(39),
          }}>
          <DeleteGrey width={18} height={18} />

          <Text style={styles.menuDesc}>Delete Account</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingRight: wp(3),

            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <Arrow width={18} height={18} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: white,
    justifyContent: 'flex-end',
    height: hp(18),
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signInAccountText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.8),
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headingText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.8),
    color: white,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  headingDescText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(1.8),
    color: blazeWhite,
    textAlign: 'center',
  },

  registerPhoneText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.3),
    marginTop: hp(1.8),
    color: black,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  headingTextBlack: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.1),
    marginTop: hp(2.1),
    marginRight: wp(3.8),
    marginLeft: wp(1),
    color: black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headingTextBlackDesc: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.1),
    marginTop: hp(2.1),
    marginRight: wp(3.8),
    marginLeft: wp(1),
    color: darkGrey,
    //fontWeight: 'bold',
    textAlign: 'center',
  },
  phoneNumberText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(1.8),
    color: white,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  phoneNumberTextDesc: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(1.8),
    color: white,
    textAlign: 'left',
  },
  menuDesc: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(1.8),
    marginLeft: wp(3),
    color: darkGrey,
    textAlign: 'left',
  },
});
