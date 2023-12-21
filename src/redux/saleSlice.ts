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
  sales: Product | null;
  loading: boolean;
  error: string;
}

const initialState: productState = {
  sales: null,
  loading: false,
  error: "",
};

export const saleSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
  getSales:(state,{payload})=>{
    state.sales = payload
  }
  },
});

// Action creators are generated for each case reducer function
export const { getSales } = saleSlice.actions;

export default saleSlice.reducer;