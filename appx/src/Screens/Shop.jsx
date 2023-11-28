import React from 'react'
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import IconX from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../Components/Search';
import Carousel from '../Components/Carousel';
import Products from '../Components/Products';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Shop = () => {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <SafeAreaView style={{ flex: 1, marginBottom: 70 }}>
        <ScrollView>
          <View>
            <Text>App</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  )
}

export default Shop

const styles = StyleSheet.create({
  Icon: {
    top: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  textContainer: {
    marginLeft: 10,
    color: '#16213E',
  },
  view: {
    margin: 12,
    marginBottom: 18,
    height: 20
  },
  ExlText: {
    marginLeft: 16,
    display: 'flex'
  }
})



{/* <View style={styles.Icon_container}>
  <Icon name="search-outline" size={20} color="#000" style={styles.searchIcon} />
  <TextInput
    style={styles.input}
    placeholder="Search"
    placeholderTextColor="#888"
  />
</View> */}

// Icon_container: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   // borderWidth: 1,
//   borderColor: '#000',
//   borderRadius: 5,
//   justifyContent: 'center',
//   margin: 24,
//   padding: 6,
//   backgroundColor: '#DDE6ED'
// },
// searchIcon: {
//   marginRight: 8,
// },
// input: {
//   flex: 1,
//   fontSize: 16,
//   padding: 6,
// },