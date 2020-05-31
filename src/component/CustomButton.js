import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({text, textColor, colors, onClick}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={styles.button}
      onPress={onClick}>
      <LinearGradient style={styles.GradientContainer} colors={colors}>
        <Text style={{color: textColor, fontSize: 18}}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  GradientContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: '80%',
    height: '30%',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});

export default CustomButton;
