import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Input, FormSubmitBtn} from './index';
import {Picker} from '@react-native-community/picker';
import countryCode from '../JsonData/countryCode.json';
import Feather from 'react-native-vector-icons/Feather';

const RegistrationForm = (props) => {
  const error = props.errorHandler;
  const [countryDial_Code, setCountryDial_Code] = useState('+972');

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
          onSubmitInput={(value) => {
            props.inputHandler(value, 'firstName');
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
          onSubmitInput={(value) => {
            props.inputHandler(value, 'lastName');
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
          onSubmitInput={(value) => {
            props.inputHandler(value, 'email');
          }}
        />
      </View>
      <View
        style={[
          styles.inputContiner,
          {borderColor: error.phoneNumber ? '#ff0000' : '#c0c0c0'},
        ]}>
        <Feather name="smartphone" size={25} style={styles.icon} />
        <View style={styles.phoneContiner}>
          <View style={styles.countryCodePicker}>
            <Picker
              style={{color: '#000'}}
              selectedValue={countryDial_Code}
              onValueChange={(itemValue) => setCountryDial_Code(itemValue)}>
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
            onSubmitInput={(value) => {
              props.inputHandler(`${countryDial_Code}${value}`, 'phoneNumber');
            }}
          />
        </View>
      </View>
      <FormSubmitBtn onSubmit={props.onSubmitForm} />
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
});
export default RegistrationForm;
