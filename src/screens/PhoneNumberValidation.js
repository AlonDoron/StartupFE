import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Color from '../constant/Colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DialNumberDigit from '../component/DialNumberDigit';
import PinCodeHolder from '../component/PinCodeHolder';

const PhoneNumberValidation = ({route}) => {
  const phoneNumber = route.params.phoneNumber;
  const [valid, setValid] = useState(false);
  const [digit1, setDigit1] = useState('');
  const [digit2, setDigit2] = useState('');
  const [digit3, setDigit3] = useState('');
  const [digit4, setDigit4] = useState('');
  const [digit5, setDigit5] = useState('');

  const changeStatePin = value => {
    if (digit1 === '') {
      setDigit1(value);
    } else {
      if (digit2 === '') {
        setDigit2(value);
      } else {
        if (digit3 === '') {
          setDigit3(value);
        } else {
          if (digit4 === '') {
            setDigit4(value);
          } else {
            if (digit5 === '') {
              setDigit5(value);
            }
          }
        }
      }
    }
  };

  const onSendHandler = () => {
    let pinCode = `${digit1}${digit2}${digit3}${digit4}${digit5}`;
    let numbers = [digit1, digit2, digit3, digit4, digit5];
    for (let digit of numbers) {
      if (digit === '') {
        setValid(false);
      } else {
        setValid(true);
      }
    }
  };

  const onDeleteHandler = () => {
    setValid(false);
    if (digit5 != '') {
      setDigit5('');
    } else {
      if (digit4 != '') {
        setDigit4('');
      } else {
        if (digit3 != '') {
          setDigit3('');
        } else {
          if (digit2 != '') {
            setDigit2('');
          } else {
            if (digit1 != '') {
              setDigit1('');
            } else {
              return;
            }
          }
        }
      }
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        {valid ? (
          <FontAwesome name="unlock" size={80} style={styles.textHeader} />
        ) : (
          <FontAwesome name="lock" size={80} style={styles.textHeader} />
        )}
        <Text style={styles.textBody}>
          Please enter the verification code{'\n'}
          we send to Phone number {phoneNumber}
        </Text>
      </View>
      <View style={styles.codeContainer}>
        <PinCodeHolder pinDigit={digit1} />
        <PinCodeHolder pinDigit={digit2} />
        <PinCodeHolder pinDigit={digit3} />
        <PinCodeHolder pinDigit={digit4} />
        <PinCodeHolder pinDigit={digit5} />
      </View>
      <View style={styles.dialNumberContainer}>
        <View style={styles.digitRow}>
          <DialNumberDigit
            onPressHandler={() => changeStatePin('1')}
            value="1"
          />
          <DialNumberDigit
            onPressHandler={() => changeStatePin('2')}
            value="2"
          />
          <DialNumberDigit
            onPressHandler={() => changeStatePin('3')}
            value="3"
          />
        </View>
        <View style={styles.digitRow}>
          <DialNumberDigit
            onPressHandler={() => changeStatePin('4')}
            value="4"
          />
          <DialNumberDigit
            onPressHandler={() => changeStatePin('5')}
            value="5"
          />
          <DialNumberDigit
            onPressHandler={() => changeStatePin('6')}
            value="6"
          />
        </View>
        <View style={styles.digitRow}>
          <DialNumberDigit
            onPressHandler={() => changeStatePin('7')}
            value="7"
          />
          <DialNumberDigit
            onPressHandler={() => changeStatePin('8')}
            value="8"
          />
          <DialNumberDigit
            onPressHandler={() => changeStatePin('9')}
            value="9"
          />
        </View>
        <View style={styles.digitRow}>
          <DialNumberDigit
            onPressHandler={() => onDeleteHandler()}
            value={<Feather name="delete" size={35} />}
          />
          <DialNumberDigit
            onPressHandler={() => changeStatePin('0')}
            value="0"
          />
          <DialNumberDigit
            onPressHandler={() => onSendHandler()}
            value={<MaterialIcons name="send" size={35} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.primary,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textContainer: {
    height: '30%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textHeader: {
    color: Color.purple,

    fontWeight: '800',
  },

  textBody: {
    fontSize: 18,
    paddingTop: 30,
    color: '#fff',
    textAlign: 'center',
  },

  codeContainer: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  digitRow: {
    flexDirection: 'row',
    height: '20%',
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  dialNumberContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default PhoneNumberValidation;
