import {
  StyleSheet,
  StatusBar,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
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
  concreteGrey,
  darkConcreteGrey,
  lightBlazeGrey,
} from '../../utils/Colors';

import PaymentStatus from '../../assets/svg/PaymentNotification.svg';
import CustomButton from '../../components/CustomButton';

export default function NumberBuyDetail({navigation}) {
  const [monthlyPlan, setMonthlyPlan] = useState('');
  const [focused, setIsFocused] = useState(false);

  const setPlans = value => {
    setMonthlyPlan(value);
    setIsFocused(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="white"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />

      <View style={{marginTop: hp(5)}}>
        <Headers
          onPress={() => navigation?.goBack()}
          showBackIcon={true}
          showText={true}
          text={'Search Results'}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: hp(4.5),
          marginHorizontal: wp(8),
          marginTop: hp(5),
        }}>
        <Text style={styles.signInAccountText}>Phone Number</Text>

        <Text style={styles.signInAccountTextDesc}>+1232456754</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: hp(4.5),
          marginHorizontal: wp(8),
          marginTop: hp(0.5),
        }}>
        <Text style={styles.signInAccountText}>Country Name</Text>

        <Text style={styles.signInAccountTextDesc}>United States (US)</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: hp(4.5),
          marginHorizontal: wp(8),
          marginTop: hp(0.5),
        }}>
        <Text style={styles.signInAccountText}>Number Type</Text>

        <Text style={styles.signInAccountTextDesc}>Local Number</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: hp(4.5),
          marginHorizontal: wp(8),
          marginTop: hp(0.5),
        }}>
        <Text style={styles.signInAccountText}>Capabilities</Text>

        <Text style={styles.signInAccountTextDesc}>SMS</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: hp(4.5),
          marginHorizontal: wp(8),
          marginTop: hp(0.5),
        }}>
        <Text style={styles.signInAccountText}>Price</Text>

        <Text style={styles.signInAccountTextDesc}>$ 34/month</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(3),
          marginHorizontal: wp(8),
        }}>
        <Text
          style={[
            styles.signInAccountText,
            {color: purple, fontWeight: '700', fontSize: hp(2.8)},
          ]}>
          Subscription Plans
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(3),
          height: hp(15),
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: wp(8),
        }}>
        <TouchableOpacity
          onPress={() => setPlans('monthly')}
          style={{
            height: hp(14),
            width: wp(38),
            borderWidth: 0.5,
            borderColor: darkGrey,
            borderRadius: wp(3),
            overflow: 'hidden',
          }}>
          <View
            style={
              monthlyPlan === 'monthly'
                ? styles.activeHeader
                : styles.nonActiveHeader
            }>
            <Text
              style={[
                styles.signInAccountText,
                {color: white, fontWeight: '100', fontSize: hp(2.1)},
              ]}>
              Monthly Plan
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text
              style={[
                styles.signInAccountText,
                {
                  color: monthlyPlan === 'monthly' ? 'black' : darkConcreteGrey,
                  fontWeight: '800',
                  fontSize: hp(3.2),
                },
              ]}>
              $ 34
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setPlans('3 months')}
          style={{
            height: hp(14),
            width: wp(38),
            borderWidth: 0.5,
            borderColor: darkGrey,
            borderRadius: wp(3),
            overflow: 'hidden',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                monthlyPlan === '3 months' ? purple : concreteGrey,
              height: hp(5),
            }}>
            <Text
              style={[
                styles.signInAccountText,
                {color: white, fontWeight: '100', fontSize: hp(2.1)},
              ]}>
              3 Months Plan
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text
              style={[
                styles.signInAccountText,
                {
                  color: monthlyPlan === '3 months' ? purple : darkConcreteGrey,
                  fontWeight: '800',
                  fontSize: hp(3.2),
                },
              ]}>
              $ 44
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(3),
          height: hp(15),
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: wp(8),
        }}>
        <TouchableOpacity
          onPress={() => setPlans('6 months')}
          style={{
            height: hp(14),
            width: wp(38),
            borderWidth: 0.5,
            borderColor: darkGrey,
            borderRadius: wp(3),
            overflow: 'hidden',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                monthlyPlan === '6 months' ? purple : concreteGrey,
              height: hp(5),
            }}>
            <Text
              style={[
                styles.signInAccountText,
                {color: white, fontWeight: '100', fontSize: hp(2.1)},
              ]}>
              6 Months Plan
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text
              style={[
                styles.signInAccountText,
                {
                  color:
                    monthlyPlan === '6 months' ? 'black' : darkConcreteGrey,
                  fontWeight: '800',
                  fontSize: hp(3.2),
                },
              ]}>
              $ 54
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setPlans('12 months')}
          style={{
            height: hp(14),
            width: wp(38),
            borderWidth: 0.5,
            borderColor: darkGrey,
            borderRadius: wp(3),
            overflow: 'hidden',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                monthlyPlan === '12 months' ? purple : concreteGrey,
              height: hp(5),
            }}>
            <Text
              style={[
                styles.signInAccountText,
                {color: white, fontWeight: '100', fontSize: hp(2.1)},
              ]}>
              12 Months Plans
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text
              style={[
                styles.signInAccountText,
                {
                  color:
                    monthlyPlan === '12 months' ? 'black' : darkConcreteGrey,
                  fontWeight: '800',
                  fontSize: hp(3.2),
                },
              ]}>
              $ 64
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: hp(5)}}>
        <CustomButton
          buttonStyle={focused === true ? null : styles.button}
          textStyle={focused === true ? null : styles.text}
          text={'Pay Now!'}
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
  activeHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: purple,
    height: hp(5),
  },
  nonActiveHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: concreteGrey,
    height: hp(5),
  },
  signInAccountText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.0),
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  signInAccountTextDesc: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.0),
    color: darkGrey,
    //fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(5),
    borderRadius: wp(5), // Adjust the border radius as per your preference
    backgroundColor: lightBlazeGrey, // Default button background color
    //paddingVertical: hp(2), // Default vertical padding
    paddingHorizontal: wp(5), // Default horizontal padding
    height: hp(5.5),
  },
  text: {
    color: darkGrey, // Default text color
    fontSize: hp(1.8), // Default font size
    fontWeight: '500', // Default font weight
  },
});
