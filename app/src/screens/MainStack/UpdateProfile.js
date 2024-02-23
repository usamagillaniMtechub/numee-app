import {ScrollView, StyleSheet, StatusBar, Text, View} from 'react-native';
import React, {useState} from 'react';
import {purple, white} from '../../utils/Colors';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Headers from '../../components/Headers';
import CustomButton from '../../components/CustomButton';
import CustomTextInputHeader from '../../components/CustomTextInputHeader';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomImageModal from '../../components/CustomImageModal';

export default function UpdateProfile({navigation}) {
  const [openModel, setOpenModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  const [imageInfo, setImageInfo] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const [url, setUrl] = useState('');

  const [userId, setUserId] = useState('');

  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const [imageUri, setImageUri] = useState(null);

  const [isActive, setIsActive] = useState(false);

  const [userData, setUserData] = useState(null);

  const [isActiveEmail, setIsActiveEmail] = useState(false);

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const handleCancel = () => {
    setModalVisible(false);
    // Handle cancel action here
  };

  const handleConfirm = () => {
    setModalVisible(false);
    // Handle confirm action here
  };

  const takePhotoFromCamera = async () => {
    launchCamera({mediaType: 'photo'}, response => {
      console.log('image here', response);
      if (!response.didCancel && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
        console.log('response', imageUri);
        setImageInfo(response.assets[0]);
        setUrl('');
      }
      ref_RBSheetCamera.current.close();
    });
  };

  const choosePhotoFromLibrary = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      console.log('image here', response);
      if (!response.didCancel && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
        setImageInfo(response.assets[0]);
        setUrl('');
      }

      console.log('response', imageUri);

      ref_RBSheetCamera.current.close();
    });
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent backgroundColor={white} />
      <View style={{marginTop: hp(5)}}>
        <Headers
          showBackIcon={true}
          showText={true}
          text={'Update Profile'}
          onPress={() => navigation?.goBack()}
        />
      </View>

      <View
        style={{
          height: hp(15),
          marginTop: hp(5),
          marginHorizontal: wp(8),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: wp(18),
            width: wp(18),
            overflow: 'hidden',
            borderRadius: wp(18) / 2,
            borderWidth: 1,
          }}></View>

        <View style={{marginTop: hp(1.5), height: hp(4)}}>
          <CustomButton
            textStyle={styles.text}
            buttonStyle={styles.button}
            text={'Change Image'}
          />
        </View>
      </View>

      <View style={{marginTop: hp(3), marginHorizontal: wp(8)}}>
        <CustomTextInputHeader
          headerText="Name"
          placeholder="Enter your name"
        />
      </View>

      <View style={{marginTop: hp(3), marginHorizontal: wp(8)}}>
        <CustomTextInputHeader
          headerText="Email Address"
          placeholder="Enter your name"
          keyboardType="email-address"
        />
      </View>

      <View style={{marginTop: hp(23), marginHorizontal: wp(5)}}>
        <CustomButton
          onPress={() => setModalVisible(true)}
          text={'Update Profile'}
        />
      </View>

      <CustomImageModal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        //imageSource={require('./your-image-path.png')} // Provide path to your image here
        headerText="Modal Header"
        bodyText="This is the body of the modal. It can contain multiple lines of text."
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        cancelText="Cancel"
        doneText="Yes"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(30),
    borderRadius: wp(5), // Adjust the border radius as per your preference
    backgroundColor: purple, // Default button background color
    //paddingVertical: hp(2), // Default vertical padding
    paddingHorizontal: wp(5), // Default horizontal padding
    height: hp(3.8),
  },
  text: {
    color: 'white', // Default text color
    fontSize: hp(1.5), // Default font size
  },
});
