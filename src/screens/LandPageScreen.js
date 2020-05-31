import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import CustomButton from '../component/CustomButton';
import Color from '../constant/Colors';
import LinearGradient from 'react-native-linear-gradient';

const LandPageScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <LinearGradient colors={['#fff', '#fff', '#fff']} style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.loginBtnContiner}>
        <CustomButton
          text="Login Via Facebook"
          colors={['#4c669f', '#3b5998', '#192f6a']}
          textColor="#fff"
        />

        <CustomButton
          text="Login Via Phone Number"
          colors={['#f08080', '#dc143c', '#ff0000']}
          onClick={() => {
            navigation.navigate('PhoneValidationScreen');
          }}
          textColor="#fff"
        />
      </View>
      <View style={{alignSelf: 'center', height: 30}}>
        <Text>Dont have an account?</Text>
      </View>
      <View style={styles.registrationBtnContiner}>
        <CustomButton
          text="Registration"
          colors={['#48D1CC', '#40E0D0', '#AFEEEE']}
          onClick={() => {
            navigation.navigate('RegistrationScreen');
          }}
          textColor="#000"
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.primary,
  },

  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginBtnContiner: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  registrationBtnContiner: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default LandPageScreen;
