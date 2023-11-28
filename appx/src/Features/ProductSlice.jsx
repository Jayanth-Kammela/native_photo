import { createSlice } from "@reduxjs/toolkit"
import { GetProduct, GetProductById, GetComments, AddCart, GetCart, DeleteCart, } from "../Services/Services"

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    comments: [],
    cart: [],
    loading: false,
    user:{}
  },
  extraReducers(builder) {

    //signin
    // builder.addCase(userSignin.pending, (state, action) => {
    //   state.loading = true;
    // }),
    //   builder.addCase(userSignin.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.user.push(action.payload);
    //   })
    // builder.addCase(userSignin.rejected, (state, action) => {
    //   state.loading = true;
    // })




    builder.addCase(GetCart.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(GetCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      }),
      builder.addCase(GetCart.rejected, (state, action) => {
        state.loading = true;
      })


    builder.addCase(DeleteCart.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(DeleteCart.fulfilled, (state, action) => {
        state.loading = false;
      }),
      builder.addCase(DeleteCart.rejected, (state, action) => {
        state.loading = false
      })
  }
})

export default ProductSlice.reducer