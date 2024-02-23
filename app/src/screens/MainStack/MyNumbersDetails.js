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
import {appImages} from '../../utils';
import CustomModal from '../../components/CustomModal';

export default function MyNumbersDetails({navigation}) {
  const [monthlyPlan, setMonthlyPlan] = useState('');
  const [focused, setIsFocused] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const handleCancel = () => {
    setModalVisible(false);
    // Handle cancel action here
  };

  const handleConfirm = () => {
    setModalVisible(false);
    // Handle confirm action here
  };

  const openCancelSubscription = () => {
    setModalVisible(true);
    // Handle confirm action here
  };

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
          marginTop: hp(3),
          marginHorizontal: wp(8),
        }}>
        <Text
          style={[
            styles.signInAccountText,
            {color: purple, fontWeight: '700', fontSize: hp(2.1)},
          ]}>
          Subscription Plans
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: hp(4.5),
          marginHorizontal: wp(8),
          marginTop: hp(2.1),
        }}>
        <Text style={styles.signInAccountText}>Subscribed Plan</Text>

        <Text style={styles.signInAccountTextDesc}>Monthly Plan</Text>
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
        <Text style={styles.signInAccountText}>Subscription Amount</Text>

        <Text style={styles.signInAccountTextDesc}>$ 34</Text>
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
        <Text style={styles.signInAccountText}>Subscription Date</Text>

        <Text style={styles.signInAccountTextDesc}>11/01/2024</Text>
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
        <Text style={styles.signInAccountText}>Expiry Date</Text>

        <Text style={styles.signInAccountTextDesc}>11/02/2024</Text>
      </View>

      <View style={{marginTop: hp(15)}}>
        <CustomButton text={'View Messages'} />
      </View>

      <View style={{marginTop: hp(3)}}>
        <CustomButton
          onPress={() => openCancelSubscription()}
          buttonStyle={styles.button}
          textStyle={styles.textResult}
          text={'Cancel Subscription'}
        />
      </View>

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        imageSource={appImages.cross} // Provide path to your image here
        headerText="Cancel Subscription?"
        bodyText="Are you sure you want to cancel subscription of this number?"
        cancelText={'Cancel'}
        doneText={'Yes, Cancel'}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
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
  text: {
    color: darkGrey, // Default text color
    fontSize: hp(1.8), // Default font size
    fontWeight: '500', // Default font weight
  },
  textResult: {
    color: purple, // Default text color
    fontSize: hp(1.8), // Default font size
    fontWeight: '500', // Default font weight
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(5),
    borderRadius: wp(5), // Adjust the border radius as per your preference
    backgroundColor: white, // Default button background color
    borderColor: purple,
    borderWidth: 1,
    //paddingVertical: hp(2), // Default vertical padding
    paddingHorizontal: wp(5), // Default horizontal padding
    height: hp(5.5),
  },
});
