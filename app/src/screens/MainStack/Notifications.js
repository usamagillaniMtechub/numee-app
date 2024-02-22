import {StyleSheet, StatusBar, Text, FlatList, View} from 'react-native';
import React from 'react';
import Headers from '../../components/Headers';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {black, darkGrey, white} from '../../utils/Colors';

import PaymentStatus from '../../assets/svg/PaymentNotification.svg';

export default function Notifications() {
  const data = [
    {
      paymentStatus: 'Payment Successful!',
      time: '03:00 pm',
      paymentDesc:
        'Your session has officially started, and we re ready to assist you',
    },
    {
      paymentStatus: 'Payment Successful!',
      time: '03:00 pm',
      paymentDesc:
        'Your session has officially started, and we re ready to assist you',
    },
    {
      paymentStatus: 'Payment Successful!',
      time: '03:00 pm',
      paymentDesc:
        'Your session has officially started, and we re ready to assist you',
    },

    // Add more data objects as needed
  ];

  const renderItem = ({item}) => (
    <View style={styles.cardContainer}>
      <PaymentStatus height={39} width={39} />

      <View style={{justifyContent: 'space-evenly'}}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: wp(3),
            justifyContent: 'space-between',
          }}>
          <Text style={styles.registerPhoneText}>{item?.paymentStatus}</Text>
          <Text style={styles.registerPhoneTextDesc}>{item?.time}</Text>
        </View>

        <Text
          style={[
            styles.registerPhoneTextDesc,
            {marginLeft: wp(3), fontWeight: null, marginTop: hp(2)},
          ]}>
          Your session has officially started, and we're {'\n'}
          ready to assist you
        </Text>
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
        <Headers showBackIcon={true} showText={true} text={'Notifications'} />
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
});
