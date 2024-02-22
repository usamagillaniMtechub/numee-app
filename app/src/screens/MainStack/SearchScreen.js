import {
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appImages} from '../assets/utilities';
import Feater from 'react-native-vector-icons/Feather';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Entypo from 'react-native-vector-icons/Entypo';

import CustomSnackbar from '../../components/CustomSnackBar';
import SuggestionBox from '../../components/SuggestionBox';
import {darkGrey, lightGrey, purple} from '../../utils/Colors';

const dummyData = [
  'Apple',
  'Banana',
  'Blueberry',
  'Cherry',
  'Orange',
  'Peach',
  'Pear',
  'Pineapple',
  'Strawberry',
];

export default function SearchScreen({navigation}) {
  const [query, setQuery] = useState('');
  const [queryShow, setQueryShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const [data, setData] = useState(null);

  const [allSignal, setAllSignals] = useState(null);

  const [selectedSuggestion, setSelectedSuggestion] = useState('');

  const handleQueryChange = text => {
    setQuery(text);
    setSelectedSuggestion(''); // Clear selected suggestion when typing
  };

  const handleSuggestionSelect = suggestion => {
    setSelectedSuggestion(suggestion);
    setQuery(suggestion);
    //getAllSignalsBYName(suggestion);
  };

  const handleUpdatePasswordShow = async value => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisible(false);
      // navigation.navigate("SignIn")
    }, 3000);
  };

  const dismissSnackbar = () => {
    setSnackbarVisible(false);
  };

  const datas = [
    {
      search: 'Search 01',
    },
    {
      search: 'Search 02',
    },
    {
      search: 'Search 03',
    },

    // Add more data objects as needed
  ];

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        height: hp(8),
        marginHorizontal: wp(5),
        alignItems: 'center',
        borderBottomColor: darkGrey,
        borderBottomWidth: 1,
        justifyContent: 'space-between',
      }}>
      <Text style={styles.headingTextBlackDesc}>{item?.search}</Text>

      <Entypo
        name="cross"
        style={{marginTop: hp(1.8)}}
        size={20}
        color={darkGrey}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="white"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: wp(3),
          alignItems: 'center',
          marginTop: hp(8),
          marginHorizontal: wp(3),
          flexDirection: 'row',
          height: hp(7),
        }}>
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-sharp" size={25} color="#282828" />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: lightGrey,
            overflow: 'hidden',
            alignItems: 'center',
            height: hp(5.7),
            marginLeft: wp(5),
            flex: 1,
            borderRadius: wp(3),
          }}>
          <Feater
            name="search"
            style={{marginLeft: wp(3)}}
            size={20}
            color={darkGrey}
          />

          <TextInput
            value={query}
            onChangeText={handleQueryChange}
            style={{marginTop: hp(-0.5), flex: 1}}
            placeholder="Search here"
          />
        </View>
      </View>
      <View style={{marginHorizontal: wp(5)}}>
        {query &&
        dummyData.filter(item => item.includes(query)).length > 0 &&
        !selectedSuggestion ? (
          <SuggestionBox
            data={dummyData}
            query={query}
            onSuggestionSelect={handleSuggestionSelect}
          />
        ) : null}
      </View>

      {selectedSuggestion ? (
        <View style={{flex: 1}}>
          <FlatList
            style={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
            data={allSignal}
            //keyExtractor={item => item.signal_id.toString()}
            renderItem={({item}) => renderItems(item)}
          />
        </View>
      ) : null}

      <View style={{flexDirection: 'row', paddingLeft: wp(5)}}>
        <Text style={styles.headingTextDesc}>Recent Searches</Text>
      </View>

      <View style={{flex: 1, marginTop: hp(0.1)}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={datas}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      {loading && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="#FACA4E" />
        </View>
      )}

      <CustomSnackbar
        message={'Success'}
        messageDescription={'Signal Copied Successfully'}
        onDismiss={dismissSnackbar} // Make sure this function is defined
        visible={snackbarVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headingTextBlackDesc: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.1),
    marginTop: hp(2.1),
    marginRight: wp(3.8),
    marginLeft: wp(1),
    color: darkGrey,
    //fontWeight: 'bold',
    textAlign: 'center',
  },
  headingTextDesc: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.1),
    marginTop: hp(2.1),
    marginRight: wp(3.8),
    fontWeight: 'bold',
    marginLeft: wp(1),
    color: purple,
    //fontWeight: 'bold',
    textAlign: 'center',
  },
});
