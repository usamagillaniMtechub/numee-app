import React from 'react';
import {
  Modal,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {purple, white} from '../utils/Colors';

const CustomModal = ({
  visible,
  onRequestClose,
  imageSource,
  headerText,
  bodyText,
  onCancel,
  onConfirm,
  cancelText,
  doneText,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onRequestClose}
      animationType="fade">
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.header}>{headerText}</Text>
          <Text style={styles.body}>{bodyText}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={onCancel}
              style={[styles.button, styles.cancelButton]}>
              <Text style={styles.buttonTextCancel}>{cancelText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirm}
              style={[styles.button, styles.confirmButton]}>
              <Text style={styles.buttonText}>{doneText}</Text>
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
  image: {
    width: 38,
    height: 38,
    resizeMode: 'cover',
  },
  header: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  body: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
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
    //fontWeight: 'bold',
  },
  buttonTextCancel: {
    color: purple,
    //fontWeight: 'bold',
  },
});

export default CustomModal;
