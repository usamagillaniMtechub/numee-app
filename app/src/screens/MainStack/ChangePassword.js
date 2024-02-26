import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Headers from '../../components/Headers';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [changePassword, setChangePassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop: hp(5)}}>
        <Headers showBackIcon={true} showText={true} text={'Change Password'} />
      </View>

      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: wp(10),
          alignItems: 'center',
          marginTop: hp(3),
        }}>
        <CustomTextInput
          onChangeText={text => setChangePassword(text)}
          left={true}
          right={true}
          placeholder={'Old Password'}
          password={true}
          leftName="Lock"
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: wp(10),
          alignItems: 'center',
        }}>
        <CustomTextInput
          onChangeText={text => setNewPassword(text)}
          left={true}
          right={true}
          placeholder={'New Password'}
          password={true}
          leftName="Lock"
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: wp(10),
          alignItems: 'center',
        }}>
        <CustomTextInput
          onChangeText={text => setNewPassword(text)}
          left={true}
          right={true}
          placeholder={'Change Password'}
          password={true}
          leftName="Lock"
        />
      </View>

      <View style={{marginTop: hp(39), marginHorizontal: wp(5)}}>
        <CustomButton text={'Change Password'} />
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
