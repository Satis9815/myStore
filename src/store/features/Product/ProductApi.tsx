/* eslint-disable no-shadow-restricted-names */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../apiConfigs/urlConfigs';

export const getAllProducts = createAsyncThunk(
  'getAllProducts',
  async (pageNumber, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}/products`);
      return res.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getASingleProduct = createAsyncThunk(
  'getASingleProduct',
  async ({productId}:{productId:number}, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}/products/${productId}`);
      return res.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const getCategories = createAsyncThunk(
  'getCategories',
  async (undefined, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}/products/categories`);
      return res.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProductByCategory = createAsyncThunk(
  'getProductByCategory',
  async ({category}:{category:string}, { rejectWithValue }) => {
    try {
      const encodedCategory = encodeURIComponent(category);
      const res = await axios.get(`${BASE_URL}/products/category/${encodedCategory}`);
      return res.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);



