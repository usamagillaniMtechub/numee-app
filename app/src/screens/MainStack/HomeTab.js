import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ActivityIndicator,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  black,
  blazeWhite,
  borderGrey,
  darkGrey,
  lightGrey,
  purple,
  white,
} from '../../utils/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Search from '../../assets/svg/Search.svg';

import Notifications from '../../assets/svg/Notifications.svg';

import Feater from 'react-native-vector-icons/Feather';

import Entypo from 'react-native-vector-icons/Entypo';

export default function HomeTab({navigation}) {
  const [countries, setCountries] = useState([]);

  const [searchResult, setSearchResult] = useState('');

  const [onFocus, setOnFocus] = useState(false);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [page]); // Fetch data whenever the page changes

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/all?page=${page}`,
      );
      const data = await response.json();

      if (searchResult !== '') {
        console.log('DONT GET');
      } else {
        setCountries(prevCountries => [...prevCountries, ...data]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const setItsSearchResult = text => {
    setSearchResult(text);
    if (text === '') {
      // Reset countries when the search text is empty
      setCountries([]);
    }
  };
  const renderItem = ({item}) => (
    <View
      style={{
        borderWidth: 1,
        marginHorizontal: wp(5),
        backgroundColor: 'white',
        marginTop: hp(3),
        justifyContent: 'space-evenly',
        borderColor: borderGrey,
        height: hp(16),
        borderRadius: wp(3),
      }}>
      <View style={{marginLeft: wp(3), flexDirection: 'row'}}>
        <Text style={styles.phoneNumberText}>{item.phoneNumber}</Text>

        <Text style={styles.phoneNumberTextDesc}>{item.phoneNumberDesc}</Text>
      </View>

      <View
        style={{
          height: hp(5),
          marginLeft: wp(3),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.headingTextBlack}>{item.countryName}</Text>

        <Text style={styles.headingTextBlackDesc}>{item.countryNameDesc}</Text>
      </View>

      <View
        style={{
          marginLeft: wp(3),
          marginTop: hp(-1.8),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.headingTextBlack}>Expiry Date</Text>

        <Text style={styles.headingTextBlackDesc}>{item.expiryDate}</Text>
      </View>
    </View>
  );

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchResult.toLowerCase()),
  );

  const handleEndReached = () => {
    if (searchResult === '') {
      setPage(prevPage => prevPage + 1); // Increment page number to fetch the next page of data
    }
  };

  const renderFooter = () => {
    return loading ? (
      <ActivityIndicator style={styles.loader} size="large" color={purple} />
    ) : null;
  };

  const renderCountryItem = ({item}) => {
    return (
      <View style={styles.countryItem}>
        <Image style={styles.flag} source={{uri: item.flags?.png}} />

        <Text ellipsizeMode="tail" numberOfLines={0} style={styles.countryName}>
          {item.name.common.length > 25
            ? `${item.name.common.substring(0, 15)}...`
            : item.name.common}
        </Text>

        <Text style={styles.countryName}>{'  '}</Text>

        <Text style={styles.shortName}>{`(${item.cca2})`}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={purple} />
      <View style={{height: hp(39), backgroundColor: purple}}>
        <View style={styles.cardContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: hp(6.5),
            }}>
            <Text style={styles.signInAccountText}>Home</Text>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-evenly',
                width: wp(34),
              }}>
              <TouchableOpacity
                onPress={() => navigation?.navigate('SearchScreen')}
                style={{
                  height: wp(10),
                  width: wp(10),
                  backgroundColor: white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: wp(10) / 2,
                }}>
                <Search width={20} height={20} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Notifications')}
                style={{
                  height: wp(10),
                  width: wp(10),
                  backgroundColor: white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: wp(10) / 2,
                }}>
                <Notifications width={20} height={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: hp(12),
              borderWidth: 1,
              borderColor: white,
              borderRadius: wp(1),
              borderStyle: 'dashed',
              width: wp(87),
            }}>
            <View
              style={{
                height: hp(10),
                width: wp(21),
                justifyContent: 'space-evenly',
              }}>
              <Text style={styles.headingText}>193</Text>

              <Text style={styles.headingDescText}>Total{'\n'}Numbers</Text>
            </View>

            <View
              style={{
                height: hp(10),
                width: wp(25),
                justifyContent: 'space-evenly',
              }}>
              <Text style={styles.headingText}>95</Text>

              <Text style={styles.headingDescText}>
                Active{'\n'}Subscriptions
              </Text>
            </View>

            <View
              style={{
                height: hp(10),
                width: wp(25),
                justifyContent: 'space-evenly',
              }}>
              <Text style={styles.headingText}>05</Text>

              <Text style={styles.headingDescText}>
                Canceled{'\n'}Subscriptions
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{marginLeft: wp(6.5)}}>
        <Text style={styles.registerPhoneText}>
          Phone Numbers from 103+ countries
        </Text>
      </View>

      <View
        style={
          onFocus === true ? styles.textInputActive : styles.textInputInActive
        }>
        <Feater
          name="search"
          style={{marginLeft: wp(3)}}
          size={20}
          color={darkGrey}
        />

        <TextInput
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          value={searchResult}
          onChangeText={text => setItsSearchResult(text)}
          style={{marginTop: hp(-0.5), flex: 1}}
          placeholder="Search here"
        />

        <TouchableOpacity onPress={() => setSearchResult('')}>
          <Entypo
            name="cross"
            style={{marginRight: wp(3)}}
            size={20}
            color={purple}
          />
        </TouchableOpacity>
      </View>

      {/* <View
        style={{
          borderWidth: 1,
          marginHorizontal: wp(5),
          backgroundColor: 'white',
          marginTop: hp(3),
          justifyContent: 'space-evenly',
          borderColor: borderGrey,
          height: hp(16),
          borderRadius: wp(3),
        }}>
        <View style={{marginLeft: wp(3), flexDirection: 'row'}}>
          <Text style={styles.phoneNumberText}>+112089908760</Text>

          <Text style={styles.phoneNumberTextDesc}>(Local)</Text>
        </View>

        <View
          style={{
            height: hp(5),
            marginLeft: wp(3),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.headingTextBlack}>Country Name</Text>

          <Text style={styles.headingTextBlackDesc}>United States (US)</Text>
        </View>

        <View
          style={{
            marginLeft: wp(3),
            marginTop: hp(-1.8),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.headingTextBlack}>Expiry Date</Text>

          <Text style={styles.headingTextBlackDesc}>14/02/2024</Text>
        </View>
      </View> */}

      <View style={{flex: 1, marginTop: hp(3)}}>
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        /> */}

        <FlatList
          data={filteredCountries}
          renderItem={renderCountryItem}
          keyExtractor={(item, index) => index.toString()}
          //onEndReached={handleEndReached}
          //onEndReachedThreshold={0.05} // Trigger when 10% from the bottom
          //ListFooterComponent={renderFooter}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: purple,
    justifyContent: 'flex-end',
    height: hp(18),
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signInAccountText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.8),
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headingText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.8),
    color: white,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  headingDescText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(1.8),
    color: blazeWhite,
    textAlign: 'center',
  },

  registerPhoneText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.3),
    marginTop: hp(1.8),
    color: black,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  phoneNumberText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.5),
    marginTop: hp(1.8),
    color: purple,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  phoneNumberTextDesc: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.1),
    marginTop: hp(2.1),
    marginLeft: wp(1),
    color: borderGrey,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headingTextBlack: {
    fontFamily: 'Montserrat-Italic',
    fontSize: hp(2.1),
    marginTop: hp(2.1),
    marginRight: wp(3.8),
    marginLeft: wp(1),
    color: black,
    fontWeight: 'bold',
    textAlign: 'center',
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

  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(8),
    padding: 10,
    backgroundColor: white,
    borderRadius: wp(2.1),
    borderWidth: 0.5,
    borderColor: darkGrey,
    marginTop: hp(3),
  },
  flag: {
    width: 50,
    height: 30,
    marginRight: 10,
  },
  countryInfo: {
    flex: 1,
  },
  countryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shortName: {
    fontSize: 14,
    color: '#666',
  },
  textInputActive: {
    flexDirection: 'row',
    backgroundColor: white,
    borderWidth: 1,
    borderColor: purple,
    marginTop: hp(5),
    overflow: 'hidden',
    alignItems: 'center',
    height: hp(5.7),
    marginHorizontal: wp(5),
    borderRadius: wp(3),
  },
  textInputInActive: {
    flexDirection: 'row',
    backgroundColor: lightGrey,
    marginTop: hp(5),
    overflow: 'hidden',
    alignItems: 'center',
    height: hp(5.7),
    marginHorizontal: wp(5),
    borderRadius: wp(3),
  },
  loader: {
    marginTop: 10,
    alignSelf: 'center',
  },
});
