import ProductSlice from "./Features/ProductSlice";

const { configureStore } = require("@reduxjs/toolkit");

const Store = configureStore({
    reducer: ProductSlice
})

export default Store