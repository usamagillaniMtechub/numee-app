import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  View,
} from 'react-native';
import React from 'react';
import {
  black,
  blazeWhite,
  borderGrey,
  darkGrey,
  lightGrey,
  purple,
  white,
} from '../../utils/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Search from '../../assets/svg/Search.svg';

import Notifications from '../../assets/svg/Notifications.svg';

export default function HomeTab({navigation}) {
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
      <StatusBar translucent backgroundColor={purple} />
      <View style={{height: hp(39), backgroundColor: purple}}>
        <View style={styles.cardContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: hp(6.5),
            }}>
            <Text style={styles.signInAccountText}>Home</Text>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-evenly',
                width: wp(34),
              }}>
              <TouchableOpacity
                onPress={() => navigation?.navigate('SearchScreen')}
                style={{
                  height: wp(10),
                  width: wp(10),
                  backgroundColor: white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: wp(10) / 2,
                }}>
                <Search width={20} height={20} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Notifications')}
                style={{
                  height: wp(10),
                  width: wp(10),
                  backgroundColor: white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: wp(10) / 2,
                }}>
                <Notifications width={20} height={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: hp(12),
              borderWidth: 1,
              borderColor: white,
              borderRadius: wp(1),
              borderStyle: 'dashed',
              width: wp(87),
            }}>
            <View
              style={{
                height: hp(10),
                width: wp(21),
                justifyContent: 'space-evenly',
              }}>
              <Text style={styles.headingText}>193</Text>

              <Text style={styles.headingDescText}>Total{'\n'}Numbers</Text>
            </View>

            <View
              style={{
                height: hp(10),
                width: wp(25),
                justifyContent: 'space-evenly',
              }}>
              <Text style={styles.headingText}>95</Text>

              <Text style={styles.headingDescText}>
                Active{'\n'}Subscriptions
              </Text>
            </View>

            <View
              style={{
                height: hp(10),
                width: wp(25),
                justifyContent: 'space-evenly',
              }}>
              <Text style={styles.headingText}>05</Text>

              <Text style={styles.headingDescText}>
                Canceled{'\n'}Subscriptions
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{marginLeft: wp(6.5)}}>
        <Text style={styles.registerPhoneText}>
          Phone Numbers from 103+ countries
        </Text>
      </View>

      {/* <View
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
          <Text style={styles.phoneNumberText}>+112089908760</Text>

          <Text style={styles.phoneNumberTextDesc}>(Local)</Text>
        </View>

        <View
          style={{
            height: hp(5),
            marginLeft: wp(3),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.headingTextBlack}>Country Name</Text>

          <Text style={styles.headingTextBlackDesc}>United States (US)</Text>
        </View>

        <View
          style={{
            marginLeft: wp(3),
            marginTop: hp(-1.8),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.headingTextBlack}>Expiry Date</Text>

          <Text style={styles.headingTextBlackDesc}>14/02/2024</Text>
        </View>
      </View> */}

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
