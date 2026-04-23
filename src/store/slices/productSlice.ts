import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";
import { AppDispatch } from "..";
import axios from "axios";

interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stockCount: number;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    },
    getProductsFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getProductsStart());

    const { data } = await apiClient.get("/api/products/getproducts");

    dispatch(getProductsSuccess(data.products || data));
  } catch (error: unknown) {
    let errorMessage = "An unexpected error occurred";

    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    dispatch(getProductsFail(errorMessage));
  }
};

export const { getProductsStart, getProductsSuccess, getProductsFail } =
  productSlice.actions;
export default productSlice.reducer;
