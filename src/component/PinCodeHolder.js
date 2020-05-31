import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Color from '../constant/Colors';
const {width, height} = Dimensions.get('window');
const PinCodeHolder = ({pinDigit}) => {
  return (
    <View style={styles.codeHolder}>
      <Text style={styles.codeHolderText}>{pinDigit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  codeHolder: {
    backgroundColor: Color.secondaryDark,
    width: '15%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  codeHolderText: {
    fontSize: 22,
  },
});

export default PinCodeHolder;
