import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import axios from 'axios';
import {Picker} from '@react-native-community/picker';
import countryCode from '../JsonData/countryCode.json';
import Input from '../component/Input';
import Feather from 'react-native-vector-icons/Feather';

const RegistrationScreen = ({navigation}) => {
  const [countryDial_Code, setCountryDial_Code] = useState('+972');
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phonNumber: '',
  });

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phonNumer: false,
  });

  // const verificationCheck = () => {
  //   const CC = countryDial_Code.substring(1);
  //   const phoneNumber = `${CC}${user.phonNumber}`;
  //   console.log(phoneNumber);
  //   axios
  //     .get(
  //       `http://18.184.165.20:81/api/Registration?phoneNumber=${phoneNumber}`,
  //     )
  //     .then(res => {
  //       const isExists = res.data;
  //       console.log('isExists= ' + isExists);
  //       if (isExists !== true) {
  //         if (isExists !== true) {
  //           navigation.navigate('PhoneNumberValidationTest', {
  //             phoneNumber: `${countryDial_Code}${user.phonNumber}`,
  //           });
  //         } else {
  //           Alert.alert('Oops', 'Its seems  You already have an account', [
  //             {text: 'Ok', style: 'cancel'},
  //           ]);
  //         }
  //       }
  //     });
  // };

  const onSubmitHandler = () => {
    if (
      user.firstName === '' ||
      user.lastName === '' ||
      user.email === '' ||
      user.phonNumber === '' ||
      error.firstName ||
      error.lastName ||
      error.email ||
      error.phonNumber
    ) {
      Alert.alert('Oops', 'Its seems  there is problem', [
        {text: 'Ok', style: 'cancel'},
      ]);
    } else {
      navigation.navigate('PhoneNumberValidationTest', {
        phoneNumber: `${countryDial_Code}${user.phonNumber}`,
      });
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.logoContiner}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
      </View>
      <View
        style={[
          styles.inputContiner,
          {borderColor: error.firstName ? '#ff0000' : '#c0c0c0'},
        ]}>
        <Feather name="user" size={25} style={styles.icon} />
        <Input
          inputType="default"
          style={styles.input}
          placeholderTextColor="#fff"
          textHolder="First Name"
          onInputChange={value => setUser({...user, firstName: value})}
          onSubmitInput={value => {
            //value === true || false

            if (value) {
              setError({
                ...error,
                firstName: false,
              });
            } else {
              setError({
                ...error,
                firstName: true,
              });
            }
          }}
        />
      </View>
      <View
        style={[
          styles.inputContiner,
          {borderColor: error.lastName ? '#ff0000' : '#c0c0c0'},
        ]}>
        <Feather name="user" size={25} style={styles.icon} />
        <Input
          style={styles.input}
          inputType="default"
          placeholderTextColor="#fff"
          textHolder="Last Name"
          onInputChange={value => setUser({...user, lastName: value})}
          onSubmitInput={value => {
            //value === true || false

            if (value) {
              setError({
                ...error,
                lastName: false,
              });
            } else {
              setError({
                ...error,
                lastName: true,
              });
            }
          }}
        />
      </View>
      <View
        style={[
          styles.inputContiner,
          {borderColor: error.email ? '#ff0000' : '#c0c0c0'},
        ]}>
        <Feather name="mail" size={25} style={styles.icon} />
        <Input
          style={styles.input}
          inputType="email-address"
          placeholderTextColor="#fff"
          textHolder="Your Email"
          onInputChange={value => setUser({...user, email: value})}
          onSubmitInput={value => {
            //value === true || false
            if (value) {
              setError({
                ...error,
                email: false,
              });
            } else {
              setError({
                ...error,
                email: true,
              });
            }
          }}
        />
      </View>
      <View
        style={[
          styles.inputContiner,
          {borderColor: error.phonNumber ? '#ff0000' : '#c0c0c0'},
        ]}>
        <Feather name="smartphone" size={25} style={styles.icon} />
        <View style={styles.phoneContiner}>
          <View style={styles.countryCodePicker}>
            <Picker
              style={{color: '#000'}}
              selectedValue={countryDial_Code}
              onValueChange={itemValue => setCountryDial_Code(itemValue)}>
              {countryCode.map(({name, dial_code, code}) => {
                return (
                  <Picker.Item
                    label={`(${dial_code})`}
                    value={dial_code}
                    key={name}
                  />
                );
              })}
            </Picker>
          </View>
          <Input
            style={styles.phoneInput}
            inputType="phone-pad"
            placeholderTextColor="#fff"
            textHolder="Phone Number"
            onInputChange={value => setUser({...user, phonNumber: value})}
            onSubmitInput={value => {
              //value === true || false
              if (value) {
                setError({
                  ...error,
                  phonNumber: false,
                });
              } else {
                setError({
                  ...error,
                  phonNumber: true,
                });
              }
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.submitBtn} onPress={onSubmitHandler}>
        <Text style={styles.submitBtnText}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.termNuse}>
        <Text style={{color: '#a8a8a8'}}>
          By pressing Submit you have agreed to our
        </Text>
        <Text style={{color: '#585858'}}>
          Terms of Use &#38; Privacy policy
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 30,
  },

  logoContiner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },

  inputContiner: {
    width: '80%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    // borderColor: '#C0C0C0',
    paddingHorizontal: '5%',
  },

  icon: {
    color: '#989898',
  },

  phoneContiner: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  countryCodePicker: {
    width: '45%',
    height: '100%',
  },

  phoneInput: {
    width: '55%',
    height: '100%',
  },

  termNuse: {
    width: '80%',

    alignItems: 'center',
  },

  submitBtn: {
    width: '80%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#484848',
    borderRadius: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },

  submitBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default RegistrationScreen;
