import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, useWindowDimensions, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { GetProductById, GetComments, AddCart, AddComment } from '../Services/Services';
import { useFocusEffect } from '@react-navigation/native';
import IconXC from 'react-native-vector-icons/Feather';
import { ListItem, Divider } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Entypo';
import IconPost from 'react-native-vector-icons/Ionicons';
import { Button } from '@rneui/themed';

const SingleProduct = () => {

    const route = useRoute()
    const { Id } = route.params;

    const [scroll, setScroll] = useState(0);
    const [count, setCount] = useState(1)
    const [expanded, setExpanded] = useState(false);
    const [review, setReview] = useState({ rating: 1, comment: '' });

    const windowWidth = useWindowDimensions().width;

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state;
    });

    const commentData = useSelector((state) => {
        return state;
    });

    useEffect(() => {
        setScroll(0);
        dispatch(GetProductById(Id));
        dispatch(GetComments(Id))
    }, [windowWidth]);

    useFocusEffect(
        React.useCallback(() => {
            setScroll(0);
            dispatch(GetProductById(Id));
            dispatch(GetComments(Id))
        }, [windowWidth, Id])
    );


    const screenWidth = Dimensions.get('window').width;
    const cardWidth = Math.min(screenWidth - 20, 240);
    const cardHeight = (cardWidth / 500) * 300;

    const carddata = data.data;

    const forReview = (value, comment) => {
        setReview({ rating: value, comment: comment });
    };

    const forPost = async () => {
        console.log({ rating: review.rating, comment: review.comment, productId: Id });
        dispatch(AddComment({ rating: review.rating, comment: review.comment, productId: Id }));
    };

    const addCart = async () => {
        try {
            dispatch(AddCart({ productId: Id, productquantity: count }))
            // console.log({ productId: Id, productquantity: count });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <React.Fragment>
            <SafeAreaView style={{ flex: 1, paddingBottom: 20, backgroundColor: '#FFFF' }}>
                <ScrollView style={{ backgroundColor: '#FFFF' }}>
                    <View style={{ flex: 1, paddingHorizontal: 6, backgroundColor: '#FFFF' }}>

                        <View style={styles.main}>

                            <View>{carddata.images && carddata.images.length > 0 ?
                                <View style={styles.container}>
                                    {carddata.images.map((imageUrl, index) => (
                                        <Image key={index} source={{ uri: imageUrl }} style={[styles.image, { opacity: index === scroll ? 1 : 0 }, { width: windowWidth - 28 },]} />))}
                                    <View style={styles.dotsContainer}>
                                        {carddata.images.map((_, index) => (
                                            <TouchableOpacity key={index} style={[styles.dot, { backgroundColor: index === scroll ? 'rgba(37,175,57,0.93)' : '#ccc' },]} onPress={() => setScroll(index)} />))}
                                    </View>
                                </View>
                                : []}
                            </View>

                            <View style={[styles.card, { width: cardWidth, height: cardHeight, marginBottom: 4 }]}>

                                <Text style={styles.productName}>{carddata.productName}</Text>
                                <Text style={styles.quantity}>{carddata.quantity}kg</Text>

                                <View style={styles.XDiscontainer}>
                                    <Text style={styles.strike}>RS100 </Text>
                                    <Text style={styles.discount}>20% off</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 100, marginTop: 4 }}>
                                        <IconXC name="minus" size={30} color='rgba(37,175,57,0.93)' onPress={() => { count > 1 ? setCount(count - 1) : '' }} />
                                        <Text style={{ color: 'black', borderWidth: 0.6, borderColor: '#435B66', borderRadius: 10, paddingLeft: 14, paddingRight: 14, paddingBottom: 6, paddingTop: 6, margin: 4 }}>
                                            {count}
                                        </Text>
                                        <IconXC name="plus" size={30} color='rgba(37,175,57,0.93)' onPress={() => { setCount(count + 1) }} />
                                    </View>
                                </View>

                                <Text style={styles.price}>Rs {count * carddata.price}</Text>
                            </View>

                        </View>

                        <View style={styles.details}>
                            <Text style={styles.nestDetail}>Product Detail</Text>
                            <Text style={styles.productDetails}>{carddata.productDetails}</Text>
                            <Divider width={0.6} color={'#9BABB8'} />
                        </View>

                        <ListItem.Accordion
                            content={
                                <ListItem.Content>
                                    <ListItem.Title style={styles.review}>Reviews</ListItem.Title>
                                </ListItem.Content>
                            }
                            isExpanded={expanded} onPress={() => { setExpanded(!expanded); }}>
                            <ListItem>
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -22, marginBottom: 20 }}>
                                        <Text style={styles.stars}>Rating</Text>
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <TouchableOpacity key={value} onPress={() => forReview(value, review.comment)}>
                                                <Icon name={review.rating >= value ? 'star' : 'star-outlined'} size={30} color={review.rating >= value ? '#ffc107' : '#ccc'} style={{ marginRight: 5 }} />
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TextInput placeholder={`Add comment to ${carddata.productName}`} onChangeText={(text) => setReview({ ...review, comment: text })} style={styles.txtComment} />
                                        {review.comment.length > 0 ? <IconPost name='send' size={30} onPress={forPost} style={{ marginLeft: 8 }} /> : ''}
                                    </View>

                                    <View style={{ marginBottom: 8 }}>
                                        <View style={{ marginLeft: 14, marginTop: 6 }}><Text style={styles.reviewHeading}>User Reviews</Text></View>
                                        {commentData.comments && commentData.comments.length > 0 && commentData.comments.map((xd) => {
                                            return (
                                                <View style={styles.reviewMain}>
                                                    <View key={xd._id} style={[styles.userReview, { marginLeft: 10, top: 20 }]}>
                                                        <Image source={{ uri: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }} style={styles.proImg} />
                                                        <View style={styles.alignTxt}>
                                                            <Text style={styles.email}>{xd.user.email}</Text>
                                                            <View style={styles.rate}>
                                                                <Text style={styles.rating}>{xd.rating}</Text>
                                                            </View>
                                                            <Text style={styles.comment}>{xd.comment}</Text>
                                                        </View>
                                                    </View>
                                                </View>)
                                        })}
                                    </View>

                                </View>
                            </ListItem>

                        </ListItem.Accordion>

                        <Divider width={0.6} color={'#9BABB8'} />

                        <View style={styles.btnGrp}>
                            <Button
                                title="NEXT DAY"
                                type="outline"
                                buttonStyle={{
                                    borderColor: '#9BA4B5', borderWidth: 1.2
                                }}
                                titleStyle={{ color: '#9BA4B5' }}
                                containerStyle={{
                                    width: 120,
                                }}
                            />
                            <Button
                                title="BEST QUALITY"
                                buttonStyle={{
                                    borderColor: '#9BA4B5', borderWidth: 1.2
                                }}
                                type="outline"
                                titleStyle={{ color: '#9BA4B5' }}
                                containerStyle={{
                                    // width: 100,
                                }}
                            />
                            <Button
                                title="LOWEST PRICE"
                                buttonStyle={{
                                    borderColor: '#9BA4B5', borderWidth: 1.2
                                }}
                                type="outline"
                                titleStyle={{ color: '#9BA4B5' }}
                                containerStyle={{
                                    // width: 100,
                                }}
                            />
                        </View>

                        <View style={styles.btnBottom}>
                            <Button onPress={addCart}
                                title="ADD TO BASKET"
                                buttonStyle={{ backgroundColor: '#9DB2BF', borderRadius: 8 }}
                                containerStyle={{
                                    height: 40,
                                    width: 180,
                                }}
                                titleStyle={{
                                    color: 'white',
                                    marginHorizontal: 20,
                                }}
                            />
                            <Button
                                title="BUY NOW"
                                buttonStyle={{ backgroundColor: '#1B9C85', borderRadius: 8 }}
                                containerStyle={{
                                    height: 40,
                                    width: 180,
                                }}
                                titleStyle={{
                                    color: 'white',
                                    marginHorizontal: 20,
                                }}
                            />
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </React.Fragment>
    )
}

export default SingleProduct

const styles = StyleSheet.create({
    container: {
        marginTop: 103,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 240,
        width: 'auto',
        position: 'absolute',
        resizeMode: 'cover',
        // borderRadius: 8
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    dot: {
        top: 84,
        width: 14,
        height: 14,
        borderRadius: 10,
        marginHorizontal: 4,
    },
    card: {
        marginTop: 120,
        marginLeft: 16
    },
    XDiscontainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginLeft: 24,
        transform: [{ scale: 1.2 }]
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
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#001C30'
    },
    quantity: {
        fontSize: 14,
        marginLeft: 2
    },
    price: {
        fontSize: 14,
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 24,
        color: '#001C30'
    },
    main: {
        backgroundColor: '#FFFF',
        borderBottomWidth: 0.8,
        borderColor: '#9BABB8',
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    details: {
        marginTop: 14,
        marginLeft: 14,
        marginRight: 14,
    },
    nestDetail: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#001C30',
        marginBottom: 10
    },
    productDetails: {
        fontSize: 16.5,
        marginBottom: 12,
        color: '#001C30'
    },
    review: {
        fontSize: 18,
        color: '#001C30',
        marginLeft: 16
    },
    reviewMain: {
        marginTop: 8,
        marginLeft: 14,
        marginRight: 14,
    },
    btn: {
        marginRight: 18,
        alignItems: 'baseline',
        paddingTop: 10
    },
    stars: {
        fontSize: 18,
        color: '#001C30',
        marginLeft: 16
    },
    btnBottom: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 48
    },
    btnGrp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32
    },
    reviewMain: {
        marginTop: 20,
    },
    reviewHeading: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    userReview: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    proImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    alignTxt: {
        flex: 1,
        marginLeft: 10,
    },
    email: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    rating: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 5,
    },
    comment: {
        fontSize: 14,
    },
    txtComment: {
        height: 36,
        width: 240,
        marginLeft: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#435B66',
        padding: 2.8
    }
});