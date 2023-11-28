import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Divider } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Feather';
import IconAcc from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLoc from 'react-native-vector-icons/Octicons';
import IconPay from 'react-native-vector-icons/MaterialIcons';
import IconEx from 'react-native-vector-icons/AntDesign';
import { Button } from '@rneui/themed';


const User = () => {
    return (
        <React.Fragment>
            <View>

                <View style={styles.container}>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }} style={styles.proImg} />
                    <View style={styles.acc}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#001C30' }}>Jayanth</Text>
                        <Text>77320jay@gmail.com</Text>
                    </View>
                </View>
                <Divider width={0.6} color={'#9BABB8'} />

                <View style={styles.min}>
                    <Icon name='shopping-bag' size={24} style={{ alignItems: 'center' }} color={'#001C30'} />
                    <Text style={{ fontSize: 18, color: '#001C30', marginRight: 245, alignItems: 'center' }}>Orders</Text>
                    <Icon name='chevron-right' size={26} />
                </View>
                <Divider width={0.6} color={'#9BABB8'} />

                <View style={styles.min}>
                    <IconAcc name='card-account-details' size={24} style={{ alignItems: 'center' }} color={'#001C30'} />
                    <Text style={{ fontSize: 18, color: '#001C30', marginRight: 210, alignItems: 'center' }}>My Details</Text>
                    <Icon name='chevron-right' size={26} />
                </View>
                <Divider width={0.6} color={'#9BABB8'} />

                <View style={styles.min}>
                    <IconLoc name='location' size={24} style={{ alignItems: 'center' }} color={'#001C30'} />
                    <Text style={{ fontSize: 18, color: '#001C30', marginRight: 160, alignItems: 'center' }}>Delivery Address</Text>
                    <Icon name='chevron-right' size={26} />
                </View>
                <Divider width={0.6} color={'#9BABB8'} />

                <View style={styles.min}>
                    <IconPay name='payment' size={24} style={{ alignItems: 'center' }} color={'#001C30'} />
                    <Text style={{ fontSize: 18, color: '#001C30', marginRight: 260, alignItems: 'center' }}>Help</Text>
                    <Icon name='chevron-right' size={26} />
                </View>
                <Divider width={0.6} color={'#9BABB8'} />

                <View style={styles.min}>
                    <IconPay name='help-outline' size={27} style={{ alignItems: 'center' }} color={'#001C30'} />
                    <Text style={{ fontSize: 18, color: '#001C30', marginRight: 210, alignItems: 'center' }}>My Details</Text>
                    <Icon name='chevron-right' size={26} />
                </View>
                <Divider width={0.6} color={'#9BABB8'} />

                <View style={styles.min}>
                    <IconEx name='exclamationcircleo' size={23} style={{ alignItems: 'center' }} color={'#001C30'} />
                    <Text style={{ fontSize: 18, color: '#001C30', marginRight: 230, alignItems: 'center' }}>About</Text>
                    <Icon name='chevron-right' size={26} />
                </View>
                <Divider width={0.6} color={'#9BABB8'} />

                <View style={{ alignItems: 'center', top: 250 }}>
                    <Button size='lg'
                        loading={false}
                        loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                            backgroundColor: '#D8D8D8',
                            borderRadius: 5,
                        }}
                        titleStyle={{ fontSize: 23, color: 'rgba(111, 202, 186, 1)' }}
                        containerStyle={{
                            width: 300,
                        }}
                        onPress={() => console.log('Log out')}>
                        <IconPay name='logout' size={27} style={{ marginRight: 28 }} color={'rgba(111, 202, 186, 1)'} />
                        Log Out</Button>
                </View>

            </View>
        </React.Fragment>
    )
}

export default User

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32
    },
    proImg: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    acc: {
        marginLeft: 18
    }, min: {
        marginTop: 14,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})