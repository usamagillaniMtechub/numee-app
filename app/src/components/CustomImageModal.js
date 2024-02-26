import React from 'react';
import {
  Modal,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {black, blazePurple, purple, white} from '../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Camera from '../../src/assets/svg/Camera.svg';
import Gallery from '../../src/assets/svg/Gallery.svg';

import Feather from 'react-native-vector-icons/Feather';

const CustomImageModal = ({
  visible,
  onRequestClose,
  headerText,
  onCancel,
  onPressCamera,
  onPressGallery,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onRequestClose}
      animationType="fade">
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <View style={styles.headerRow}>
            <Text style={styles.headerText}>{headerText}</Text>
            <TouchableOpacity onPress={onCancel}>
              <Ionicons name="close" size={25} color={black} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: hp(15),
              width: wp(70),
              marginHorizontal: wp(3),
            }}>
            <TouchableOpacity
              onPress={onPressCamera}
              style={{
                flexDirection: 'row',
                overflow: 'hidden',
                borderRadius: wp(3),
                width: wp(33),
                marginTop: hp(3),
                backgroundColor: blazePurple,
                height: hp(14),
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <Camera width={28} height={28} />
                <Text
                  style={[
                    styles.headerText,

                    {color: purple, fontSize: hp(2.0), fontWeight: '500'},
                  ]}>
                  Camera
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onPressGallery}
              style={{
                flexDirection: 'row',
                overflow: 'hidden',
                borderRadius: wp(3),
                width: wp(33),
                marginTop: hp(3),
                backgroundColor: blazePurple,
                height: hp(14),
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <Gallery width={23} height={23} />
                <Text
                  style={[
                    styles.headerText,

                    {color: purple, fontSize: hp(2.0), fontWeight: '500'},
                  ]}>
                  Gallery
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    //marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  headerText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 25,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
  },
  confirmButton: {
    backgroundColor: purple,
  },
  buttonText: {
    color: 'white',
  },
  buttonTextCancel: {
    color: purple,
  },
});

export default CustomImageModal;
