import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CheckBox } from '@rneui/themed';

const Radio = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const forChange = (value) => {
    setSelectedValue(value);
  };

  const forSubmit = () => {
    console.log(selectedValue);
  };

  return (
    <View style={styles.container}>
      <CheckBox
        title="Google"
        checked={selectedValue === 'Google'}
        onPress={() => forChange('Google')}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
      />
      <CheckBox
        title="Net Banking"
        checked={selectedValue === 'Net Banking'}
        onPress={() => forChange('Net Banking')}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
      />

      <Button title="Submit" onPress={forSubmit} />

      {selectedValue !== '' && (
        <Text style={styles.selectedValueText}>
          Selected Value: {selectedValue}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedValueText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Radio;