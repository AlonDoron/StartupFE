import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-community/picker';
import countryCode from '../JsonData/countryCode.json';
import Input from '../component/Input';
import Feather from 'react-native-vector-icons/Feather';

const LoginViaPhoneScreen = ({navigation}) => {
  const [phoneValue, setPhoneValue] = useState('');
  const [countryDial_Code, setCountryDial_Code] = useState('+972');
  const [valid, setValid] = useState(false);

  // const onSubmitHandler = value => {
  //   if (value != '' || value.match(phoneRegex)) {
  //     setValid(true);
  //     return true;
  //   } else {
  //     setValid(false);
  //     return false;
  //   }
  // };

  return (
    <View style={styles.screen}>
      <View style={styles.logoContiner}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
      </View>
      <View
        style={[
          styles.inputContiner,
          {borderColor: valid ? '#ff0000' : '#c0c0c0'},
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
            onInputChange={value => setPhoneValue(value)}
            onSubmitInput={value => {
              //value === true || false
              if (value) {
                setValid(true);
              } else {
                setValid(false);
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
});

export default LoginViaPhoneScreen;
