import React, { useEffect } from 'react';
import { FlatList,Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GetProduct } from '../Services/Services';
import Card from './Card';

const Products = ({num,Num}) => {
  const dispatch = useDispatch();

  const wholeData = useSelector((state) => {
    return state;
  });


  useEffect(() => {
    dispatch(GetProduct());
  }, []);



  const screenWidth = Dimensions.get('window').width;
  const cardWidth = Math.min(screenWidth - 20, 240);
  const cardHeight = (cardWidth / 240) * 300;

  const forPress = (id) => {
    console.log(id);
  };

  const forItem = ({ item }) => {
    if (item.images && item.images.length > 0) {
      return (
        <Card item={item} forPress={forPress} cardWidth={cardWidth} cardHeight={cardHeight} />
      )
    } else {
      return null
    }
  }

  return (
    <React.Fragment>
      {wholeData.data.whole && wholeData.data.whole.length > 0 ? <FlatList
        data={wholeData.data.whole.slice(num, Num)}
        horizontal
        keyExtractor={(item) => item._id}
        renderItem={forItem} />
        : []}
    </React.Fragment>
  );
};

export default Products;
