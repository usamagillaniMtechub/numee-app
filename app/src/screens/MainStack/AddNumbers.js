import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {darkGrey, purple, white} from '../../utils/Colors';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {SelectCountry, Dropdown} from 'react-native-element-dropdown';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomButton from '../../components/CustomButton';

export default function AddNumbers({navigation}) {
  const [category, setCategory] = useState('');

  const [categoryId, setCategoryId] = useState('');

  const [categoriesSelect, setCategorySelect] = useState([]);

  const [isFocus, setIsFocus] = useState(false);

  const [isFocusArea, setIsFocusArea] = useState(false);

  const [isFocusNumberType, setIsFocusNumberType] = useState(false);

  const [isFocusCapabilities, setIsFocusCapabilities] = useState(false);

  const [isFocusPrefix, setIsFocusPrefix] = useState(false);

  const Condition = [
    {label: 'new', value: 'new'},
    {label: 'used_Like_new', value: 'used_Like_new'},
    {label: 'used_Good', value: 'used_Good'},
    {label: 'used_Fair', value: 'used_Fair'},
  ];

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={false}
        backgroundColor={white}
      />

      <View
        style={{
          height: hp(15),
          backgroundColor: 'white',
          justifyContent: 'flex-end',
          paddingBottom: wp(10),
        }}>
        <Text style={styles.registerPhoneText}>Add Numbers</Text>
      </View>

      <View style={{marginHorizontal: wp(8)}}>
        <Dropdown
          style={
            isFocus
              ? styles.textInputSelectedCategory
              : styles.textInputCategoryNonSelected
          }
          containerStyle={{
            marginTop: 3,
            alignSelf: 'center',
            borderRadius: wp(3),
            marginRight: wp(15),
            //width: '100%',
          }}
          // dropdownPosition="top"
          // mode="modal"
          placeholderStyle={{
            color: '#121420',
            //   fontWeight: '400',
            fontFamily: 'Inter',
            fontSize: hp(1.8),
          }}
          iconStyle={isFocus ? styles.iconStyle : styles.iconStyleInactive}
          itemTextStyle={{color: '#000000'}}
          selectedTextStyle={{fontSize: 16, color: '#000000'}}
          // inputSearchStyle={styles.inputSearchStyle}
          // iconStyle={styles.iconStyle}
          value={category}
          data={Condition}
          search={true}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={'Country'}
          searchPlaceholder="Search..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setCategoryId(item.value);
            setIsFocus(false);
          }}
          renderRightIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? purple : darkGrey}
              name="down"
              size={15}
            />
          )}
        />
      </View>

      <View style={{marginHorizontal: wp(8)}}>
        <Dropdown
          style={
            isFocusArea
              ? styles.textInputSelectedCategory
              : styles.textInputCategoryNonSelected
          }
          containerStyle={{
            marginTop: 3,
            alignSelf: 'center',
            borderRadius: wp(3),
            marginRight: wp(15),
            //width: '100%',
          }}
          // dropdownPosition="top"
          // mode="modal"
          placeholderStyle={{
            color: '#121420',
            //   fontWeight: '400',
            fontFamily: 'Inter',
            fontSize: hp(1.8),
          }}
          iconStyle={isFocus ? styles.iconStyle : styles.iconStyleInactive}
          itemTextStyle={{color: '#000000'}}
          selectedTextStyle={{fontSize: 16, color: '#000000'}}
          // inputSearchStyle={styles.inputSearchStyle}
          // iconStyle={styles.iconStyle}
          value={category}
          data={Condition}
          search={true}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={'Area'}
          searchPlaceholder="Search..."
          onFocus={() => setIsFocusArea(true)}
          onBlur={() => setIsFocusArea(false)}
          onChange={item => {
            setCategoryId(item.value);
            setIsFocusArea(false);
          }}
          renderRightIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? purple : darkGrey}
              name="down"
              size={15}
            />
          )}
        />
      </View>

      <View style={{marginHorizontal: wp(8)}}>
        <Dropdown
          style={
            isFocusNumberType
              ? styles.textInputSelectedCategory
              : styles.textInputCategoryNonSelected
          }
          containerStyle={{
            marginTop: 3,
            alignSelf: 'center',
            borderRadius: wp(3),
            marginRight: wp(15),
            //width: '100%',
          }}
          // dropdownPosition="top"
          // mode="modal"
          placeholderStyle={{
            color: '#121420',
            //   fontWeight: '400',
            fontFamily: 'Inter',
            fontSize: hp(1.8),
          }}
          iconStyle={
            isFocusNumberType ? styles.iconStyle : styles.iconStyleInactive
          }
          itemTextStyle={{color: '#000000'}}
          selectedTextStyle={{fontSize: 16, color: '#000000'}}
          // inputSearchStyle={styles.inputSearchStyle}
          // iconStyle={styles.iconStyle}
          value={category}
          data={Condition}
          search={false}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={'Number Type'}
          searchPlaceholder="Search..."
          onFocus={() => setIsFocusNumberType(true)}
          onBlur={() => setIsFocusNumberType(false)}
          onChange={item => {
            //setCategoryId(item.value);
            setIsFocusNumberType(false);
          }}
          renderRightIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? purple : darkGrey}
              name="down"
              size={15}
            />
          )}
        />
      </View>

      <View style={{marginHorizontal: wp(8)}}>
        <Dropdown
          style={
            isFocusCapabilities
              ? styles.textInputSelectedCategory
              : styles.textInputCategoryNonSelected
          }
          containerStyle={{
            marginTop: 3,
            alignSelf: 'center',
            borderRadius: wp(3),
            marginRight: wp(15),
            //width: '100%',
          }}
          // dropdownPosition="top"
          // mode="modal"
          placeholderStyle={{
            color: '#121420',
            //   fontWeight: '400',
            fontFamily: 'Inter',
            fontSize: hp(1.8),
          }}
          iconStyle={
            isFocusCapabilities ? styles.iconStyle : styles.iconStyleInactive
          }
          itemTextStyle={{color: '#000000'}}
          selectedTextStyle={{fontSize: 16, color: '#000000'}}
          // inputSearchStyle={styles.inputSearchStyle}
          // iconStyle={styles.iconStyle}
          value={category}
          data={Condition}
          search={false}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={'Capabilities'}
          searchPlaceholder="Search..."
          onFocus={() => setIsFocusCapabilities(true)}
          onBlur={() => setIsFocusCapabilities(false)}
          onChange={item => {
            //setCategoryId(item.value);
            setIsFocusCapabilities(false);
          }}
          renderRightIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? purple : darkGrey}
              name="down"
              size={15}
            />
          )}
        />
      </View>

      <View
        style={
          isFocusPrefix === false
            ? styles.textInputNonSelected
            : styles.textInputSelected
        }>
        <TextInput
          placeholder="Prefix"
          style={{paddingLeft: wp(5)}}
          onFocus={() => setIsFocusPrefix(true)}
          onBlur={() => setIsFocusPrefix(false)}
        />
      </View>

      <View
        style={{
          flex: 1,
          marginTop: hp(8),
          marginHorizontal: wp(5),
          justifyContent: 'center',
        }}>
        <CustomButton
          onPress={() => navigation.navigate('SearchResults')}
          text={'Search'}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  registerPhoneText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.8),
    marginLeft: wp(8),
    color: purple,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  textInputSelectedCategory: {
    borderWidth: 1,
    borderRadius: wp(3),
    width: '98.8%',
    borderColor: purple,
    backgroundColor: white,
    paddingHorizontal: 20,
    paddingVertical: 6.8,
    marginBottom: 20,
    marginTop: hp(3),
  },
  textInputCategoryNonSelected: {
    // borderWidth: 1,
    borderRadius: wp(3),
    width: '98.8%',
    backgroundColor: white,
    //borderColor: white,
    paddingHorizontal: 20,
    paddingVertical: 6.8,
    marginBottom: 20,
    marginTop: hp(3),
  },
  iconStyle: {
    color: '#C4C4C4',
    width: 20,
    height: 20,
  },
  iconStyleInactive: {
    color: '#FACA4E',
  },
  maintext: {
    fontSize: hp(2.3),
    color: '#303030',
    fontWeight: 'bold',
  },
  modaltextview: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp(90),
    borderRadius: 25,
    backgroundColor: 'white',
    paddingHorizontal: wp(15),
  },
  optiontext: {
    fontSize: hp(1.7),
    color: '#303030',
    marginLeft: wp(4),
  },
  nonselectedItems: {
    width: wp(35),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: hp(14),
    borderRadius: wp(1.8),
    borderWidth: 1,
    borderColor: '#E7EAF2',
  },
  selectedItems: {
    width: wp(35),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: hp(14),
    borderRadius: wp(1.8),
    borderWidth: 1,
    borderColor: '#FACA4E',
  },
  selectCheckBox: {
    width: 17,
    height: 17,
    borderRadius: wp(1),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FACA4E',
  },
  unSelectCheckBox: {
    width: 17,
    height: 17,
    borderRadius: wp(1),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C4C4C4',
  },
  imageContainer: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 100,
    aspectRatio: 1, // Maintain the aspect ratio of the image
  },
  closeButton: {
    position: 'absolute',
    top: 1,
    //right: -7,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(8),
    height: wp(8),
    width: wp(8),
  },
  closeButtonText: {
    color: 'white',
  },

  textInputSelected: {
    height: hp(7),
    marginTop: hp(2),
    borderWidth: 1,
    borderRadius: wp(3),
    marginHorizontal: wp(8),
    borderColor: purple,
    backgroundColor: white,
  },
  textInputNonSelected: {
    // borderWidth: 1,
    marginTop: hp(2),
    height: hp(7),
    borderRadius: wp(3),
    marginHorizontal: wp(8),
    backgroundColor: white,
  },
});
