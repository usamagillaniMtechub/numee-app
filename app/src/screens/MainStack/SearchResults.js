import {StyleSheet, StatusBar, Text, FlatList, View} from 'react-native';
import React from 'react';
import Headers from '../../components/Headers';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  black,
  darkGrey,
  white,
  purple,
  blazeWhite,
  borderGrey,
} from '../../utils/Colors';

import PaymentStatus from '../../assets/svg/PaymentNotification.svg';

export default function Notifications() {
  const data = [
    {
      phoneNumber: '+112089908760',
      phoneNumberDesc: '(Local)',
      countryName: 'Country Name',
      countryNameDesc: 'United States (US)',
      expiryDate: '14/02/2024',
    },
    {
      phoneNumber: '+112089908760',
      phoneNumberDesc: '(Local)',
      countryName: 'Country Name',
      countryNameDesc: 'United States (US)',
      expiryDate: '14/02/2024',
    },
    {
      phoneNumber: '+112089908760',
      phoneNumberDesc: '(Local)',
      countryName: 'Country Name',
      countryNameDesc: 'United States (US)',
      expiryDate: '14/02/2024',
    },

    // Add more data objects as needed
  ];

  const renderItem = ({item}) => (
    <View
      style={{
        borderWidth: 1,
        marginHorizontal: wp(5),
        backgroundColor: 'white',
        marginTop: hp(3),
        justifyContent: 'space-evenly',
        borderColor: borderGrey,
        height: hp(16),
        borderRadius: wp(3),
      }}>
      <View style={{marginLeft: wp(3), flexDirection: 'row'}}>
        <Text style={styles.phoneNumberText}>{item.phoneNumber}</Text>

        <Text style={styles.phoneNumberTextDesc}>{item.phoneNumberDesc}</Text>
      </View>

      <View
        style={{
          height: hp(5),
          marginLeft: wp(3),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.headingTextBlack}>{item.countryName}</Text>

        <Text style={styles.headingTextBlackDesc}>{item.countryNameDesc}</Text>
      </View>

      <View
        style={{
          marginLeft: wp(3),
          marginTop: hp(-1.8),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.headingTextBlack}>Expiry Date</Text>

        <Text style={styles.headingTextBlackDesc}>{item.expiryDate}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="white"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />
      <View style={{marginTop: hp(5)}}>
        <Headers showBackIcon={true} showText={true} text={'Search Results'} />
      </View>

      <View style={{flex: 1, marginTop: hp(3)}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: white,
    borderRadius: wp(5),
    height: hp(12),
    marginHorizontal: wp(5),
    marginTop: hp(5),
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
  registerPhoneText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.3),
    //marginTop: hp(1.8),
    color: black,
    fontWeight: 'bold',
  },
  registerPhoneTextDesc: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(1.8),
    //marginTop: hp(1.8),
    color: darkGrey,
    //fontWeight: 'bold',
  },

  cardContainer: {
    backgroundColor: purple,
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
  phoneNumberText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.5),
    marginTop: hp(1.8),
    color: purple,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  phoneNumberTextDesc: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.1),
    marginTop: hp(2.1),
    marginLeft: wp(1),
    color: borderGrey,
    fontWeight: 'bold',
    textAlign: 'center',
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
});
