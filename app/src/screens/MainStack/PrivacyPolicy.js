import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Headers from '../../components/Headers';
import {darkGrey} from '../../utils/Colors';

export default function PrivacyPolicy({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{marginTop: hp(5)}}>
        <Headers
          onPress={() => navigation.goBack()}
          showBackIcon={true}
          text={'Privacy Policy'}
          showText={true}
        />
      </View>

      <ScrollView style={{flex: 1, paddingHorizontal: wp(5)}}>
        <Text
          style={{
            color: darkGrey,
            lineHeight: hp(3),
            marginTop: hp(3),
            fontSize: hp(1.5),
          }}>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information. If you
          contact us directly, we may receive additional information about you
          such as your name, email address, phone number, the contents of the
          message and/or attachments you may send us, and any other information
          you may choose to provide. When you register for an Account, we may
          ask for your contact information, including items such as name,
          company name, address, email address, and telephone number. Like any
          other website, mtechub llc uses 'cookies'. These cookies are used to
          store information including visitors' preferences, and the pages on
          the website that the visitor accessed or visited. The information is
          used to optimize the users' experience by customizing our web page
          content based on visitors' browser type and/or other information. You
          may consult this list to find the Privacy Policy for each of the
          advertising partners of mtechub llc. Third-party ad servers or ad
          networks uses technologies like cookies, JavaScript, or Web Beacons
          that are used in their respective
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
