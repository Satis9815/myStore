/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../apiConfigs/urlConfigs";

export const getAllProducts = createAsyncThunk(
    'getAllProducts',
    async (pageNumber, { rejectWithValue }) => {
      try {
        const res = await axios.get(`${BASE_URL}/products`);
        return res.data;
      } catch (error:any) {
        if (!error.response) {
          throw error;
        }
        return rejectWithValue(error.response.data);
      }
    }
  );