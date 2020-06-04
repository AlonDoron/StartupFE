import React, {useState} from 'react';
import {StyleSheet, Alert} from 'react-native';
import axios from 'axios';
import {RegistrationForm} from '../forms/index';

const RegistrationScreen = ({navigation}) => {
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
    phoneNumer: false,
  });
  const regex = {
    email: /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phoneNumber: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  };

  const inputCheckValidation = (value, type) => {
    switch (type) {
      case 'firstName':
        if (value !== '') {
          setUser({...user, firstName: value});
          setError({...error, firstName: false});
        } else {
          setError({...error, firstName: true});
        }
        break;
      case 'lastName':
        if (value !== '') {
          setUser({...user, lastName: value});
          setError({...error, lastName: false});
        } else {
          setError({...error, lastName: true});
        }
        break;
      case 'email':
        if (value !== '' && value.match(regex.email)) {
          setUser({...user, email: value});
          setError({...error, email: false});
        } else {
          setError({...error, email: true});
        }
        break;
      case 'phoneNumber':
        if (value !== '' && value.match(regex.phoneNumber)) {
          setUser({...user, phoneNumber: value});
          setError({...error, phoneNumber: false});
        } else {
          setError({...error, phoneNumber: true});
        }
        break;
    }
  };

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
    <RegistrationForm
      inputHandler={(value, type) => {
        //value === string === inputValue
        //type === string === type of the input e.g firstName||lastName||email||phoneNumber
        inputCheckValidation(value, type);
      }}
      errorHandler={error}
      onSubmitForm={onSubmitHandler}
    />
  );
};

const styles = StyleSheet.create({});

export default RegistrationScreen;
