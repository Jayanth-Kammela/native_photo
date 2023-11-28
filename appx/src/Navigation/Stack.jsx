import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllProducts from '../Components/AllProducts'
import Tabs from './Tabs'
import SingleProduct from '../Components/SingleProduct'

const Stack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <React.Fragment>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name='All-Products' component={AllProducts} />
                <Stack.Screen name='product' component={SingleProduct} options={{ headerShown: true }}/>
            </Stack.Navigator>
        </React.Fragment>
    )
}

export default Stack