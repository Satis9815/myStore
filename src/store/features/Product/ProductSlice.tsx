/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllProducts } from './ProductApi';

const initialState = {
  is_loading:{
    loading:false,

  },
  is_success:{
    loading:false,
  },
  all_products: [],
  temp_products:[]
};
const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //GET ALL PRODUCT DATA
    builder.addCase(getAllProducts.pending,(state)=>{
        state.is_loading.loading = true;
        state.is_success.loading = false;
        
    });
    builder.addCase(getAllProducts.fulfilled,(state, { payload }: PayloadAction<any>)=>{
        state.is_loading.loading = false;
        state.is_success.loading = true;
        console.log(payload);
        state.all_products = payload;
        
    });
    builder.addCase(getAllProducts.rejected,(state)=>{
        state.is_loading.loading = false;
        state.is_success.loading = false;
    });

  },
});

export default productSlice.reducer;
