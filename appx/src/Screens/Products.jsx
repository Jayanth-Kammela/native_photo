import React, { useState } from 'react';
import ImageIcon from 'react-native-vector-icons/Feather';
import { View, StyleSheet, Image, SafeAreaView, TextInput, StatusBar, Button, TouchableOpacity, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { postUserProduct } from '../Services/Services';


const Product = () => {

  const [form, setForm] = useState({
    title: '',
    description: '',
  });

  const [selectedImage, setSelectedImage] = useState('');


  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };


  const handleSubmit = async () => {
    try {
      console.log({ ...form, image: selectedImage });
      const data = { ...form, image: selectedImage }
      await postUserProduct(data)
      setForm({
        title: '',
        description: '',
      });
      setSelectedImage(null)
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
              placeholder="Enter product title"
              onChangeText={value => setForm({ ...form, title: value })}
              keyboardType='default'
              placeholderTextColor={'#133680'}
            />
          </View>

          <View style={styles.inputFormWrapper}>
            <TextInput
              style={styles.inputForm}
              placeholder="Enter product description"
              onChangeText={value => setForm({ ...form, description: value })}
              keyboardType='default'
              placeholderTextColor={'#133680'}
              multiline
            />
          </View>

          {selectedImage && (
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 4
            }}>
              <Image
                source={{ uri: selectedImage }}
                style={{ width: 380, height: 120, borderRadius: 4 }}
              />
            </View>)}

          {selectedImage ? '' : <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 4
          }}>
            <ImageIcon name='image' size={100} color='black' onPress={openImagePicker} />
          </View>}

          <TouchableOpacity
            style={styles.buttonStyle1}
            activeOpacity={0.5}
            onPress={handleSubmit}>
            <Text style={styles.buttonTextStyle}>Submit</Text>
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
  wrapper__title: {
    alignItems: 'center',
    marginVertical: 24,
  },

  title: {
    fontSize: 24,
  },
  sub__title: {
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
    borderRadius: 10,
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