/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getAllProducts,
  getASingleProduct,
  getCategories,
  getProductByCategory,
} from './ProductApi';

const initialState = {
  is_loading: {
    loading: false,
  },
  is_success: {
    loading: false,
  },
  all_products: [],
  temp_products: [],
  single_product: null,
  categories: [],
};
const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //GET ALL PRODUCT DATA
    builder.addCase(getAllProducts.pending, (state) => {
      state.is_loading.loading = true;
      state.is_success.loading = false;
    });
    builder.addCase(
      getAllProducts.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.is_loading.loading = false;
        state.is_success.loading = true;
        state.all_products = payload;
      }
    );
    builder.addCase(getAllProducts.rejected, (state) => {
      state.is_loading.loading = false;
      state.is_success.loading = false;
    });

    //GET A SINGLE PRODUCT DATA
    builder.addCase(getASingleProduct.pending, (state) => {
      state.is_loading.loading = true;
      state.is_success.loading = false;
    });
    builder.addCase(
      getASingleProduct.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.is_loading.loading = false;
        state.is_success.loading = true;
        console.log(payload);
        state.single_product = payload;
      }
    );
    builder.addCase(getASingleProduct.rejected, (state) => {
      state.is_loading.loading = false;
      state.is_success.loading = false;
    });

    //GET ALL CATEGORIES
    builder.addCase(getCategories.pending, (state) => {});
    builder.addCase(
      getCategories.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.categories = payload;
      }
    );
    builder.addCase(getCategories.rejected, (state) => {});

    //GET PRODUCT BY CATEGORY
    builder.addCase(getProductByCategory.pending, (state) => {
      state.is_loading.loading = true;
      state.is_success.loading = false;
    });
    builder.addCase(
      getProductByCategory.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.is_loading.loading = false;
        state.is_success.loading = true;
        state.all_products = payload;
      }
    );
    builder.addCase(getProductByCategory.rejected, (state) => {
      state.is_loading.loading = false;
      state.is_success.loading = false;
    });
  },
});

export default productSlice.reducer;
