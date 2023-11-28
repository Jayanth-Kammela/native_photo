import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { ListItem, Divider, CheckBox, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconX from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCart, GetCart } from '../Services/Services';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Bag = () => {

  // const token = await AsyncStorage.getItem('token');

  useFocusEffect(
    React.useCallback(() => {
      
    }, [])
  );

  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.container}>
          <Text>APp</Text>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

export default Bag;