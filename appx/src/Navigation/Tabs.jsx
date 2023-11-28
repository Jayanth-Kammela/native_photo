import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Shop from '../Screens/Shop'
import Favourite from '../Screens/Favourite'
import Explore from '../Screens/Products'
import ProductList from '../Screens/ProductList'
import Account from '../Screens/Account'
import Icon from 'react-native-vector-icons/Entypo';
import IconX from 'react-native-vector-icons/MaterialCommunityIcons';
import IconXD from 'react-native-vector-icons/MaterialIcons';
import IconXC from 'react-native-vector-icons/Feather';


const Tabs = () => {

  const Tab = createBottomTabNavigator();

  return (
    <React.Fragment>
      <Tab.Navigator initialRouteName='Shop' screenOptions={{ tabBarShowLabel: false, tabBarStyle: { height: 60, position: 'absolute', bottom: 6, borderRadius: 14 } }}>
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon name="shop" size={30} color='rgba(37,175,57,0.93)' />
              ) : (
                <Icon name="shop" size={30} color='#001C30' />
              ),
          }}
        />
        <Tab.Screen name='Explore' component={Explore} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <IconX name="text-search" size={30} color='rgba(37,175,57,0.93)' />
            ) : (
              <IconX name="text-search" size={30} color='#001C30' />
            ),
        }} />
        <Tab.Screen name='ProductList' component={ProductList} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <IconXC name="shopping-cart" size={30} color='rgba(37,175,57,0.93)' />
            ) : (
              <IconXC name="shopping-cart" size={30} color='#001C30' />
            ),
        }} />
        <Tab.Screen name='Account' component={Account} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <IconX name="account" size={30} color='rgba(37,175,57,0.93)' />
            ) : (
              <IconX name="account" size={30} color='#001C30' />
            ),
        }} />
      </Tab.Navigator>
    </React.Fragment>
  )
}

export default Tabs


{/* <Tab.Screen
          name="Shop"
          component={Shop}
        // options={{
        //   tabBarIcon: ({ focused }) =>
        //   focused ? (
        //     <Entypo name="home" size={24} color="#003580" />
        //   ) : (
        //     <Entypo name="home" size={24} color="black" />
        //   ),
        // }}
        /> */}