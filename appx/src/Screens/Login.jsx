import React, { useState } from 'react';
import ImageIcon from 'react-native-vector-icons/Feather';
import { View, StyleSheet, Image, SafeAreaView, TextInput, StatusBar, Button, TouchableOpacity, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { userSignin } from '../Services/Services';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Product = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  });


  const handleSubmit = async () => {
    try {
      if (form.email && form.password) {
        console.log(form);
        const res = await userSignin(form);
        console.log(res.token);

        await AsyncStorage.setItem('token', res.token);

        setForm({
          email: '',
          password: '',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View style={styles.container}>
          <View style={styles.inputFormWrapper}>
            <TextInput
              style={styles.inputForm}
              placeholder="Enter product email"
              onChangeText={value => setForm({ ...form, email: value })}
              keyboardType='email-address'
              placeholderTextColor={'#133680'}
            />
          </View>

          <View style={styles.inputFormWrapper}>
            <TextInput
              style={styles.inputForm}
              placeholder="Enter product password"
              onChangeText={value => setForm({ ...form, password: value })}
              keyboardType='visible-password'
              placeholderTextColor={'#133680'}
              multiline
            />
          </View>


          <TouchableOpacity
            style={styles.buttonStyle1}
            activeOpacity={0.5}
            onPress={handleSubmit}>
            <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    marginTop: 100
  },
  image: {
    width: '100%',
    height: 260,
    shadowColor: 'red',
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowOpacity: 0.8,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  wrapper__email: {
    alignItems: 'center',
    marginVertical: 24,
  },

  email: {
    fontSize: 24,
  },
  sub__email: {
    fontSize: 14,
  },
  inputFormWrapper: {
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  inputForm: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#dadae8',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  buttonStyle1: {
    backgroundColor: '#133680',
    borderWidth: 0,
    color: '#FFFFFF',
    height: 40,
    alignItems: 'center',
    borderRadius: 24,
    marginTop: 20,
    marginBottom: 25,
    textTransform: 'none',
    width: 380
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});