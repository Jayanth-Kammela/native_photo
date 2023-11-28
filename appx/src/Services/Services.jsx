import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const url = 'http://10.0.2.2:8000/api'

//signin
export const userSignin = async (data) => {
    const wholeData = await axios.post(`${url}/signin`, data);
    return wholeData.data
}


//product
export const postUserProduct = async (data) => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    const wholeData = await axios.post(`${url}/product/create`,data,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(wholeData.status);
    return wholeData.data
}

export const GetComments = createAsyncThunk('ecom/getComments', async (id) => {
    const wholeData = await axios.get(`${url}/getcomment/${id}`);
    return wholeData.data.comments
})

//cart
export const AddCart = createAsyncThunk('cart/post', async (data) => {
    const newData = axios.post(`${url}/addcart`, data);
    return (await newData).data

})


export const GetCart = createAsyncThunk('cart/get', async () => {
    const cartData = await axios.get(`${url}/getcart`);
    return cartData.data;
})

export const DeleteCart = createAsyncThunk('cart/delete', async (id) => {
    await axios.delete(`${url}/deletecart/${id}`)
    return id

})

//comment
export const AddComment = createAsyncThunk('cart/post', async (data) => {
    const newData = axios.post(`${url}/postcomment`, data);
    return (await newData).data

})