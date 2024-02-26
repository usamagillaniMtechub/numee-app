import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Headers from '../../components/Headers';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

export default function ContactUs({navigation}) {
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop: hp(5)}}>
        <Headers
          onPress={() => navigation?.goBack()}
          showBackIcon={true}
          showText={true}
          text={'Contact Us'}
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: wp(10),
          alignItems: 'center',
          marginTop: hp(3),
        }}>
        <CustomTextInput
          onChangeText={text => setName(text)}
          placeholder={'Name'}
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: wp(10),
          alignItems: 'center',
        }}>
        <CustomTextInput
          onChangeText={text => setEmailAddress(text)}
          placeholder={'Email Address'}
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: wp(10),
          alignItems: 'center',
        }}>
        <CustomTextInput
          multiline={true}
          height={hp(30)}
          textAlignVertical={'top'} // Align text to the top vertically
          onChangeText={text => setMessage(text)}
          placeholder={'Message'}
        />
      </View>

      <View style={{marginTop: hp(18), marginHorizontal: wp(5)}}>
        <CustomButton text={'Submit'} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
