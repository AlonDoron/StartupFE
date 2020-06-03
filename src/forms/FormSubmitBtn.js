import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const FormSubmitBtn = ({style, onSubmit}) => {
  return (
    <View>
      <TouchableOpacity style={[style, styles.submitBtn]} onPress={onSubmit}>
        <Text style={styles.submitBtnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
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

export default FormSubmitBtn;
