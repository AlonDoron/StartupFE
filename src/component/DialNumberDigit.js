import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const DialNumberDigit = ({value, onPressHandler}) => {
  return (
    <TouchableOpacity
      style={styles.digit}
      onPress={() => onPressHandler(value)}>
      <Text style={styles.digitText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  digit: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  digitText: {
    fontSize: 35,
  },
});

export default DialNumberDigit;
