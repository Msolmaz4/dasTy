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
  purchases: Product | null;
  loading: boolean;
  error: string;
}

const initialState: productState = {
  purchases: null,
  loading: false,
  error: "",
};

export const purSlice = createSlice({
  name: "purchases",
  initialState,
  reducers: {
  getPur:(state,{payload})=>{
    state.purchases = payload
  }
  },
});

// Action creators are generated for each case reducer function
export const { getPur } = purSlice.actions;

export default purSlice.reducer;