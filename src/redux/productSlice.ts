import { createSlice } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  name: string;
  phone: string;
  address: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface productState {
  products: Product | null;
  loading: boolean;
  error: string;
}

const initialState: productState = {
  products: null,
  loading: false,
  error: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProSuccess: (state, { payload }) => {
      (state.products = payload), (state.loading = false);
    },
    neueProduct: (state, { payload }) => {
      (state.products = payload), (state.loading = false);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProSuccess, neueProduct } = productSlice.actions;

export default productSlice.reducer;
