import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const Card = ({ item, forPress, cardWidth, cardHeight }) => {
  return (
    <View style={[styles.card, { width: cardWidth, height: cardHeight }]}>
      <Image source={{ uri: item.images[0] }} style={styles.image} />
      <Text style={styles.productName}>{item.productName}</Text>
      <Text style={styles.quantity}>{item.quantity}kg</Text>
      <View style={styles.XDiscontainer}>
        <Text style={styles.strike}>RS100 </Text>
        <Text style={styles.discount}>20% off</Text>
      </View>
      <Text style={styles.price}>₹{item.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => forPress(item._id)}>
        <Text style={styles.buttonTxt}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    margin: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '62%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#001C30'
  },
  price: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#001C30'
  },
  quantity: {
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    position: 'absolute',
    bottom: 16,
    right: 14,
    backgroundColor: 'green',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  XDiscontainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  strike: {
    textDecorationLine: 'line-through',
    color: 'red',
    fontSize: 16,
  },
  discount: {
    color: 'green',
    fontSize: 12,
    marginLeft: 10
  }
});