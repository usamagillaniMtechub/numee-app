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
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomImageModal = ({
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
          <View style={styles.headerRow}>
            <Text style={styles.headerText}>{headerText}</Text>
            <TouchableOpacity onPress={onCancel}>
              <Ionicons name="close-circle" size={25} color={purple} />
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
    fontSize: 18,
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
